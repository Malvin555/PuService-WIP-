@extends('layouts.worker')

@section('title', 'All Notifications')

@section('content')
<div class="min-h-screen bg-gray-100">
    <!-- Header Section -->
    <div class="bg-blue-600 py-8 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-white">Notifications Management</h1>
            <p class="text-blue-100 mt-2">Send and manage system notifications.</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Send Notification Form -->
        <div class="bg-white p-6 rounded-xl shadow-md mb-12 border border-blue-100">
            <h2 class="text-xl font-semibold text-blue-700 mb-6">Send New Notification</h2>
            <form method="POST" action="{{ route('worker.send.notification') }}" id="notificationForm" class="space-y-6">
                @csrf

                <!-- User Selection -->
                <div>
                    <label for="user_id" class="block text-sm font-medium text-gray-700">Select User</label>
                    <select id="user_id" name="user_id"
                        class="mt-1 w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm @error('user_id')  @enderror"
                        required>
                        <option value="" disabled selected>Choose a user</option>
                        @foreach($users as $user)
                            <option value="{{ $user->id }}">{{ $user->name }}</option>
                        @endforeach
                    </select>
                    @error('user_id')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Message -->
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4"
                        class="mt-2 p-3 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm @error('message')  @enderror"
                        required></textarea>
                    @error('message')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Submit Button -->
                <div class="flex justify-end">
                    <button type="submit" id="submitButton"
                        class="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition">
                        <span id="buttonText">Send</span>
                        <svg id="loadingSpinner"
                            class="hidden animate-spin ml-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>

        <!-- Notifications Table -->
        <div class="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <h2 class="text-xl font-semibold text-blue-700 mb-4">Sent Notifications</h2>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
                    <thead class="bg-blue-50">
                        <tr>
                            <th class="px-6 py-3 text-left font-medium uppercase tracking-wider">User</th>
                            <th class="px-6 py-3 text-left font-medium uppercase tracking-wider">Message</th>
                            <th class="px-6 py-3 text-left font-medium uppercase tracking-wider">Sent At</th>
                            <th class="px-6 py-3 text-left font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @forelse($notifications as $notification)
                            <tr class="hover:bg-blue-50 transition">
                                <td class="px-6 py-4 font-medium text-gray-900">{{ $notification->notifiable->name }}</td>
                                <td class="px-6 py-4">{{ $notification->data['message'] ?? 'No message' }}</td>
                                <td class="px-6 py-4 text-gray-500">{{ $notification->created_at->diffForHumans() }}</td>
                                <td class="px-6 py-4">
                                    <form method="POST" action="{{ route('worker.delete.notification', $notification->id) }}"
                                        class="inline-block delete-form">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="text-red-600 hover:text-red-800 font-medium transition focus:outline-none">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="px-6 py-4 text-center text-gray-500">No notifications found.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    document.getElementById('notificationForm').addEventListener('submit', function () {
        const submitButton = document.getElementById('submitButton');
        const buttonText = document.getElementById('buttonText');
        const loadingSpinner = document.getElementById('loadingSpinner');

        submitButton.disabled = true;
        buttonText.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
    });

    document.querySelectorAll('.delete-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (confirm('Are you sure you want to delete this notification?')) {
                this.submit();
            }
        });
    });
</script>
@endsection
