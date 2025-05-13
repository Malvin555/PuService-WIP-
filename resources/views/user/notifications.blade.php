@extends('layouts.user')
@section('title', 'PuService | User Notification')

@section('content')
<div class="pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Notifications</h1>
            <p class="mt-2 text-lg text-gray-600">Stay updated on your reports and service announcements.</p>
        </div>

        <div class="bg-white shadow-sm overflow-hidden sm:rounded-lg border border-gray-100 mb-10">
            <div class="border-b border-gray-200 px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Notifications</h3>
                </div>
            </div>

            <ul role="list" class="divide-y divide-gray-200">
    @forelse($notifications as $notification)
        <li class="{{ $loop->first ? 'bg-blue-50' : '' }}">
            <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <span class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                {{ $notification->data['message'] ?? 'No message' }}
                            </p>
                        </div>
                    </div>
                    <div class="ml-4 flex-shrink-0 flex">
                        <p class="text-sm text-gray-500">
                            {{ $notification->created_at->diffForHumans() }}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    @empty
        <li class="text-center py-4 text-gray-500">
            You have no notifications.
        </li>
    @endforelse
</ul>


            <div class="bg-gray-50 px-4 py-3 sm:px-6 text-center">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Load more notifications
                </button>
            </div>
        </div>

       
    </div>
</div>
@endsection

