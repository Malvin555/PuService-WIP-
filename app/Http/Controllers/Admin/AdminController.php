<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Report;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Mpdf\Mpdf;

class AdminController extends Controller
{

    public function dashboard()
{
    $totalReports = Report::count();
    $totalUsers = User::count();
    $pendingReports = Report::where('status', 'pending')->count();
    $categories = Category::count();

    // Stats for charts
    $statusLabels = [];
    $statusCounts = [];

    $statusData = Report::selectRaw('status, COUNT(*) as count')->groupBy('status')->get();
    foreach ($statusData as $row) {
        $statusLabels[] = ucwords(str_replace('_', ' ', $row->status));
        $statusCounts[] = $row->count;
    }

    $categoryLabels = [];
    $categoryCounts = [];

    $categoryData = Report::selectRaw('category_id, COUNT(*) as count')
        ->groupBy('category_id')
        ->with('category')
        ->get();

    foreach ($categoryData as $row) {
        $categoryLabels[] = $row->category->name ?? 'Uncategorized';
        $categoryCounts[] = $row->count;
    }

    return view('admin.dashboard', compact(
        'totalReports',
        'totalUsers',
        'pendingReports',
        'categories',
        'statusLabels',
        'statusCounts',
        'categoryLabels',
        'categoryCounts'
    ));
}


    public function allReports(Request $request)
{
    $query = Report::with('user');

    // Add search filtering
    if ($request->has('search') && !empty($request->search)) {
        $search = $request->input('search');
        $query->where(function ($q) use ($search) {
            $q->where('title', 'like', "%{$search}%")
              ->orWhere('description', 'like', "%{$search}%")
              ->orWhereHas('user', function ($q) use ($search) {
                  $q->where('name', 'like', "%{$search}%");
              });
        });
    }

    // Add category filtering
    if ($request->has('category') && !empty($request->category)) {
        $query->where('category_id', $request->category);
    }

    // Fetch all categories for the filter
    $categories = Category::all();

    // Fetch reports with pagination
    $reports = $query->orderBy('created_at', 'desc')->paginate(5)->withQueryString();

    // Pass variables to the view
    return view('admin.reports.index', compact('reports', 'categories'));
}




    public function allUsers(Request $request)
{
    // Start with a query to get all users
    $query = User::withCount('reports'); // Get all users, count the reports for each

    // If a search term is provided, filter by name or email
    if ($request->has('search') && !empty($request->search)) {
        $query->where(function ($q) use ($request) {
            $q->where('name', 'like', '%' . $request->search . '%')
              ->orWhere('email', 'like', '%' . $request->search . '%');
        });
    }

    // If a role filter is provided, filter by role
    if ($request->has('role') && !empty($request->role)) {
        $query->where('role', $request->role);
    }

    // Sorting by newest or oldest
    if ($request->has('sort') && in_array($request->sort, ['newest', 'oldest'])) {
        if ($request->sort === 'newest') {
            $query->orderBy('created_at', 'desc'); // Newest first
        } else {
            $query->orderBy('created_at', 'asc'); // Oldest first
        }
    }

    // Paginate the results, keeping the search query in the pagination
    $users = $query->paginate(6)->withQueryString(); 

    return view('admin.users.index', compact('users'));
}


    public function categories()
    {
        $categories = Category::paginate(8); // Remove latest()
        return view('admin.categories.index', compact('categories'));
    }

    public function storeCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Category::create([
            'name' => $request->name,
        ]);

        return redirect()->back()->with('success', 'Category added successfully!');
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->back()->with('success', 'Category deleted successfully!');
    }

    public function storeUsers(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|',
    ], [
        'password.min' => 'Password must be at least 6 characters.',
        'password.confirmed' => 'Passwords do not match.',
        'email.unique' => 'This email is already registered.',
    ]);

    User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    return redirect()->route('admin.users.index')->with('success', 'User added successfully.');
}

public function destroyUsers($id)
{
    $user = User::findOrFail($id);
    $user->delete();

    return redirect()->back()->with('success', 'User deleted successfully.');
}

public function updateUsers(Request $request, User $user)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users,email,' . $user->id,
        'role' => 'required|in:admin,worker,user',
        'password' => 'nullable|min:6',
    ]);

    $user->name = $request->name;
    $user->email = $request->email;
    $user->role = $request->role;

    if ($request->filled('password')) {
        $user->password = Hash::make($request->password);
    }

    $user->save();

    return redirect()->route('admin.users.index')->with('success', 'User updated successfully.');
}

public function storeReport(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'category_id' => 'required|exists:categories,id',
            'file-upload' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'address' => 'required|max:255'
        ]);

        $imagePath = null;
        if ($request->hasFile('file-upload')) {
            $imagePath = $request->file('file-upload')->store('reports', 'public');
        }

        Report::create([
            'user_id' => auth()->id(),
            'category_id' => $request->category_id, // Make sure this exists in the request
            'title' => $request->title,
            'description' => $request->description,
            'image_path' => $imagePath ?? null, // If there's an image
            'address' => $request->address,
            'status' => 'pending',
        ]);
        
        return redirect()->route('admin.reports.index')->with('success', 'Report submitted successfully.');
    }

    public function destroyReport(Report $report)
{
    $report->delete();
    return redirect()->back()->with('success', 'Report deleted successfully.');
}

    public function profile()
    {
        $user = Auth::user();
        return view('admin.profile', compact('user'));
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'phone_number' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
        ]);

        // Update user data
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
        ]);

        // Redirect back with success message
        return redirect()->route('admin.profile')->with('success', 'Profile updated successfully.');
    }

    public function updatePassword(Request $request)
    {
        $user = Auth::user();

        // Validate input
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        // Check if current password is correct
        if (!Hash::check($request->current_password, $user->password)) {
            return back()->withErrors(['current_password' => 'Incorrect current password.']);
        }

        // Update password
        $user->password = Hash::make($request->new_password);
        $user->save();

        return redirect()->route('admin.profile')->with('success', 'Password updated successfully.');
    }

    public function updateReport(Request $request, $id)
{
    $request->validate([
        'title' => 'required|max:255',
        'description' => 'required',
        'category_id' => 'required|exists:categories,id',
        'file-upload' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'address' => 'required|max:255',
        'status' => 'required|in:pending,in_progress,resolved',
        'response' => 'nullable|string',
    ]);

    $report = Report::findOrFail($id);

    if ($request->hasFile('file-upload')) {
        if ($report->image_path && \Storage::disk('public')->exists($report->image_path)) {
            \Storage::disk('public')->delete($report->image_path);
        }

        $report->image_path = $request->file('file-upload')->store('reports', 'public');
    }

    $report->title = $request->title;
    $report->description = $request->description;
    $report->category_id = $request->category_id;
    $report->address = $request->address;
    $report->status = $request->status;
    $report->response = $request->response;
    $report->save();

    return redirect()->back()->with('success', 'Report updated successfully.');
}

    public function generatePDF(Request $request)
{
    // Get the category from the request (if any)
    $category = $request->input('category');  // Grabbing the category id from query parameters

    // Get reports based on the category (if provided), or all reports if no category filter is applied
    if ($category) {
        // If a category is provided, fetch reports belonging to that category
        $reports = Report::where('category_id', $category)->with('category', 'user')->get();
    } else {
        // Otherwise, fetch all reports
        $reports = Report::with('category', 'user')->get();
    }
    
    // Create an instance of mPDF
    $mpdf = new Mpdf();

    // Load the view and render the HTML, passing the reports
    $html = view('mpdf.index', compact('reports'))->render();

    // Write the HTML content to the PDF
    $mpdf->WriteHTML($html);

    // Output the PDF to the browser (inline for viewing or you can download it)
    return $mpdf->Output('report.pdf', 'I'); // 'I' stands for inline (open in browser)
}





}
