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
                <li class="bg-blue-50">
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        Your report "Pothole Repair" has been updated to "In Progress"
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        A maintenance crew has been assigned to your report.
                                    </p>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <p class="text-sm text-gray-500">5 minutes ago</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        Your report "Street Light Outage" has been resolved
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        The issue has been fixed. Please let us know if you have any further concerns.
                                    </p>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <p class="text-sm text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        Scheduled maintenance in your area
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Water service will be temporarily interrupted on Oak Avenue on March 15 from 9 AM to 12 PM.
                                    </p>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <p class="text-sm text-gray-500">Yesterday</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        New feature: Report Sharing
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        You can now share your reports with other citizens or community groups.
                                    </p>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <p class="text-sm text-gray-500">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        Thank you for your feedback
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Your suggestions have been forwarded to the relevant department.
                                    </p>
                                </div>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <p class="text-sm text-gray-500">1 week ago</p>
                            </div>
                        </div>
                    </div>
                </li>
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

