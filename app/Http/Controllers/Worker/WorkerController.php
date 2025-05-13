<?php

namespace App\Http\Controllers\Worker;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\Category;
use Auth;
use Hash;
use App\Notifications\UserAlertNotification;
use Illuminate\Notifications\DatabaseNotification;

class WorkerController extends Controller
{

    public function dashboard()
    {
        $totalReports = Report::count();
        $pendingReports = Report::where('status', 'pending')->count();
        $inProgressReports = Report::where('status', 'in_progress')->count();
        $resolvedReports = Report::where('status', 'resolved')->count();

        $recentReports = Report::latest()->take(5)->get();

        return view('worker.dashboard', compact('totalReports', 'pendingReports', 'inProgressReports', 'resolvedReports','recentReports'));
    }

    public function allReports(Request $request)
    {
        $query = Report::with('user');

        // Check if a search query exists
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

        $reports = $query->orderBy('created_at', 'desc')->paginate(5)->withQueryString(); // Keep search query in pagination

        return view('worker.reports.index', compact('reports'));
    }


    public function allPending(Request $request)
{
    $query = Report::with('user')->where('status', 'pending'); // Only fetch pending reports

    // Check if a search query exists
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

    $reports = $query->orderBy('created_at', 'desc')->paginate(5)->withQueryString(); // Keep search query in pagination

    return view('worker.reports.pendingReports', compact('reports'));
}

public function allProgress(Request $request)
{
    $query = Report::with('user')->where('status', 'in_progress'); // Only fetch pending reports

    // Check if a search query exists
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

    $reports = $query->orderBy('created_at', 'desc')->paginate(5)->withQueryString(); // Keep search query in pagination

    return view('worker.reports.progressReports', compact('reports'));
}

public function allResolved(Request $request)
{
    $query = Report::with('user')->where('status', 'resolved'); // Only fetch pending reports

    // Check if a search query exists
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

    $reports = $query->orderBy('created_at', 'desc')->paginate(5)->withQueryString(); // Keep search query in pagination

    return view('worker.reports.resolvedReports', compact('reports'));
}


public function allUsers(Request $request)
{
    $query = User::where('role', 'user')->withCount('reports'); // Only get users with role 'user'

    // If a search term is provided, filter by name or email
    if ($request->has('search') && !empty($request->search)) {
        $query->where(function ($q) use ($request) {
            $q->where('name', 'like', '%' . $request->search . '%')
              ->orWhere('email', 'like', '%' . $request->search . '%');
        });
    }

    $users = $query->paginate(5)->withQueryString(); // Keep search query in pagination

    return view('worker.users.index', compact('users'));
}

public function respond(Request $request)
{
    $request->validate([
        'report_id' => 'required|exists:reports,id',
        'status' => 'required|in:pending,in_progress,resolved',
        'response' => 'nullable|string|max:500',
    ]);

    $report = Report::findOrFail($request->report_id);
    $report->status = $request->status;
    $report->response = $request->response;
    $report->save();

    return redirect()->back()->with('success', 'Report response submitted successfully.');
}

public function destroy(Report $report)
{
    $report->delete();
    return redirect()->back()->with('success', 'Report deleted successfully.');
}


public function profile()
    {
        $user = Auth::user();
        return view('worker.profile', compact('user'));
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
        return redirect()->route('worker.profile')->with('success', 'Profile updated successfully.');
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

        return redirect()->route('worker.profile')->with('success', 'Password updated successfully.');
    }



public function sendNotification(Request $request)
{
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'message' => 'required|string|max:255',
    ]);

    $user = User::where('id', $request->user_id)->where('role', 'user')->first();

    if (!$user) {
        return back()->withErrors(['user_id' => 'Selected user is not a regular user.']);
    }

    $user->notify(new UserAlertNotification($request->message));

    return back()->with('success', 'Notification sent to the user.');
}

public function notifications()
{
    // Fetch users with the role 'user'
    $users = \App\Models\User::where('role', 'user')->get();

    // Fetch notifications only for users with role = 'user'
    $notifications = DatabaseNotification::whereHasMorph(
        'notifiable',
        [\App\Models\User::class],
        function ($query) {
            $query->where('role', 'user');
        }
    )
    ->with('notifiable') // eager load the user who received the notification
    ->latest()
    ->get();

    return view('worker.notifications.index', compact('users', 'notifications'));
}


public function deleteNotification($id)
{
    // Find the notification by its ID
    $notification = DatabaseNotification::findOrFail($id);

    // Delete the notification
    $notification->delete();

    return redirect()->back()->with('success', 'Notification deleted successfully');
}






}
