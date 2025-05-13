@extends('layouts.user')

@section('title', 'PuService | User')

@section('content')
<div class="pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Welcome back, {{ auth()->user()->name }}!</h1>
            <p class="mt-2 text-lg text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id quos temporibus? Neque, maxime molestias tenetur dolores doloremque repudiandae cum!</p>
        </div>

        

        <!-- Quick Actions -->
        <h2 class="text-xl font-semibold text-gray-900 mb-5">Quick Actions</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <a href="{{ route('user.report.new') }}" class="block group">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:border-blue-500 transition-colors duration-200">
                    <div class="px-4 py-5 sm:p-6 text-center">
                        <div class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-medium text-gray-900">Send Report</h3>
                        <p class="mt-1 text-sm text-gray-500">Submit a new report or incident</p>
                    </div>
                </div>
            </a>

            <a href="{{ route('user.report.history') }}" class="block group">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:border-blue-500 transition-colors duration-200">
                    <div class="px-4 py-5 sm:p-6 text-center">
                        <div class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-medium text-gray-900">View History</h3>
                        <p class="mt-1 text-sm text-gray-500">See all your past reports</p>
                    </div>
                </div>
            </a>

            <a href="{{ route('user.notifications') }}" class="block group">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:border-blue-500 transition-colors duration-200">
                    <div class="px-4 py-5 sm:p-6 text-center">
                        <div class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-medium text-gray-900">Notifications</h3>
                        <p class="mt-1 text-sm text-gray-500">Check your latest updates</p>
                    </div>
                </div>
            </a>

            <a href="{{ route('user.profile') }}" class="block group">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:border-blue-500 transition-colors duration-200">
                    <div class="px-4 py-5 sm:p-6 text-center">
                        <div class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-medium text-gray-900">Edit Profile</h3>
                        <p class="mt-1 text-sm text-gray-500">Update your account details</p>
                    </div>
                </div>
            </a>
        </div>

        <!-- Recent Reports -->
        <h2 class="text-xl font-semibold text-gray-900 mb-5">Recent Reports</h2>
        <div class="bg-white shadow-sm overflow-hidden sm:rounded-md border border-gray-100 mb-10">
            <ul role="list" class="divide-y divide-gray-200">
            @forelse ($reports as $report )
                <li>
                    <a href="{{ route('user.report.history') }}" class="block hover:bg-gray-50">
                        <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-blue-600 truncate">{{ $report->title }}</p>
                                <div class="ml-2 flex-shrink-0 flex">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
    {{ $report->status == 'resolved' ? 'bg-green-100 text-green-800' : 
       ($report->status == 'in_progress' ? 'bg-yellow-100 text-yellow-800' : 
       'bg-gray-100 text-gray-800') }}">
    {{ ucwords(str_replace('_', ' ', $report->status)) }}
</span>
                                </div>
                            </div>
                            <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                    <p class="flex items-center text-sm text-gray-500">
                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        {{ $report->address }}
                                    </p>
                                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        {{ $report->category->name }}
                                    </p>
                                </div>
                                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Submitted on <time
                                            datetime="{{ $report->created_at }}">{{ $report->created_at->format('M d, Y') }}</time>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                @empty
                <li class="px-4 py-4 text-gray-500 text-center">No reports found.</li>
                @endforelse
            </ul>
        </div>

        <!-- View All Reports Button -->
        <div class="text-center">
            <a href="{{ route('user.report.history') }}" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View All Reports
                <svg class="ml-2 -mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
</div>
@endsection
