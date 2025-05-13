<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Hash;
use Storage;
use App\Models\Report;
use App\Models\Category;


class UserController extends Controller
{

    public function dashboard()
    {
        $query = Report::where('user_id', auth()->id());
        $reports = $query->latest()->paginate(3);


        return view('user.dashboard', compact('reports'));
    }

    public function createReport()
    {
        $categories = Category::all();
        return view('user.report.new', compact('categories'));
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
        
        return redirect()->route('user.dashboard')->with('success', 'Report submitted successfully.');
    }

    public function reportHistory(Request $request)
    {
        $categories = Category::all();
        $query = Report::where('user_id', auth()->id());

        // Filter by Search Query
        if ($request->has('search') && $request->search != '') {
            $query->where('title', 'like', '%' . $request->search . '%')
                ->orWhere('description', 'like', '%' . $request->search . '%');
        }

        // Filter by Status
        if ($request->has('status') && $request->status != 'all') {
            $query->where('status', $request->status);
        }

        // Filter by Category
        if ($request->has('type') && $request->type != '') {
            $query->where('category_id', $request->type);
        }

        $reports = $query->latest()->paginate(5);

        return view('user.report.history', compact('categories', 'reports'));
    }   





    public function profile()
    {
        $user = Auth::user();
        return view('user.profile', compact('user'));
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
        return redirect()->route('user.profile')->with('success', 'Profile updated successfully.');
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

        return redirect()->route('user.profile')->with('success', 'Password updated successfully.');
    }
}
