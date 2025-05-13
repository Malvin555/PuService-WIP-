@extends('layouts.admin')

@section('title', 'Admin Dashboard')

@section('content')
<div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
    <p class="mt-1 text-sm text-gray-600">Welcome back! Here's an overview of the system.</p>
</div>

<!-- Stats Overview -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
            <div class="flex items-center">
                <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">Total Reports</dt>
                        <dd class="flex items-baseline">
                            <div class="text-2xl font-semibold text-gray-900">{{ $totalReports }}</div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
            <div class="flex items-center">
                <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                        <dd class="flex items-baseline">
                            <div class="text-2xl font-semibold text-gray-900">{{ $totalUsers }}</div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
            <div class="flex items-center">
                <div class="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">Pending Reports</dt>
                        <dd class="flex items-baseline">
                            <div class="text-2xl font-semibold text-gray-900">{{ $pendingReports }}</div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
            <div class="flex items-center">
                <div class="flex-shrink-0 bg-purple-600 rounded-md p-3">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">Categories</dt>
                        <dd class="flex items-baseline">
                            <div class="text-2xl font-semibold text-gray-900">{{ $categories }}</div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Main Content -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
   <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Reports by Status -->
    <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Reports by Status</h3>
        <canvas id="statusChart" height="200"></canvas>
    </div>

    <!-- Reports by Category -->
    <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Reports by Category</h3>
        <canvas id="categoryChart" height="200"></canvas>
    </div>
</div>


    <!-- Quick Actions -->
    <div class="lg:col-span-1">
        <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div class="p-4">
                <div class="space-y-3">
                    <a href="{{ route('admin.reports.index') }}" class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <div class="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">Create Report</p>
                        </div>
                    </a>
                    <a href="{{ route('admin.users.index') }}" class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <div class="flex-shrink-0 h-10 w-10 rounded-md bg-green-600 flex items-center justify-center text-white">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">Add User</p>
                        </div>
                    </a>
                    <a href="{{ route('admin.categories.index') }}" class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <div class="flex-shrink-0 h-10 w-10 rounded-md bg-purple-600 flex items-center justify-center text-white">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">Add Category</p>
                        </div>
                    </a>
                    <a  href="{{ route('admin.reports.print') }}" class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <div class="flex-shrink-0 h-10 w-10 rounded-md bg-gray-600 flex items-center justify-center text-white">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-900">Print Reports</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    window.statusLabels = @json($statusLabels);
    window.statusCounts = @json($statusCounts);
    window.categoryLabels = @json($categoryLabels);
    window.categoryCounts = @json($categoryCounts);
</script>

@vite('resources/js/chart.js')


@endsection
