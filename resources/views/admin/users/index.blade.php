@extends('layouts.admin')

@section('title', 'User Management')

@section('content')
<div class="mb-6 space-y-4 sm:space-y-0 sm:flex sm:items-start sm:justify-between">
    <!-- Header Title -->
    <div>
        <h1 class="text-2xl font-bold text-gray-900">User Management</h1>
        <p class="mt-1 text-sm text-gray-600">View and manage user accounts.</p>
    </div>

    <!-- Action Form (Search, Add, Print, Sort) -->
    <form method="GET" action="{{ route('admin.users.index') }}" class="w-full sm:w-auto mt-4 sm:mt-0">
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <!-- Search Input -->
            <div class="relative w-full sm:w-64">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input type="text" name="search" value="{{ request('search') }}"
                       class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                       placeholder="Search users...">
            </div>

            <!-- Sort Dropdown -->
            <select name="sort" onchange="this.form.submit()"
                    class="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sort by</option>
                <option value="newest" {{ request('sort') == 'newest' ? 'selected' : '' }}>Newest First</option>
                <option value="oldest" {{ request('sort') == 'oldest' ? 'selected' : '' }}>Oldest First</option>
            </select>

            <!-- Add User Button -->
            <a id="open-user-modal" href="#"
               class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add User
            </a>

            <!-- Print Button -->
            <button type="button" onclick="window.print()"
                    class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Print
            </button>
        </div>
    </form>
</div>



<!-- Card Grid View -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    @forelse($users as $user)
    <div class="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
        <div class="p-4 flex items-start justify-between">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-12 w-12">
                    <div
                        class="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">
                        {{ substr($user->name, 0, 2) }}
                    </div>
                </div>
                <div class="ml-4">
                    <div class="text-base font-medium text-gray-900">{{ $user->name }}</div>
                    <div class="text-sm text-gray-500">{{ $user->email }}</div>
                </div>
            </div>
            <div>
                <span
                    class="inline-flex capitalize items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ $user->role }}
                </span>
            </div>
        </div>
        <div class="border-t border-gray-100 px-4 py-3">
            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col">
                    <span class="text-xs text-gray-500 uppercase tracking-wider">Reports</span>
                    <span class="mt-1 text-sm font-medium text-gray-900">{{ $user->reports_count }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-xs text-gray-500 uppercase tracking-wider">Joined</span>
                    <span
                        class="mt-1 text-sm font-medium text-gray-900">{{ $user->created_at->format('M d, Y') }}</span>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 bg-gray-50 flex justify-between items-center">
            <div class="text-xs text-gray-500">
                ID: #00{{ $user->id }}
            </div>
            <div class="flex space-x-3">
                <button type="button" 
                    class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    data-id="{{ $user->id }}"
                    data-name="{{ $user->name }}"
                    data-email="{{ $user->email }}"
                    data-role="{{ $user->role }}"
                    onclick="openEditModal(this)">
                    Edit
                </button>

                <button type="button" onclick="showUserModal({{ $user->id }}, '{{ $user->name }}', '{{ $user->email }}', '{{ $user->role }}', {{ $user->reports_count }}, '{{ $user->created_at->format('M d, Y') }}')"
                    class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View
                </button>
                <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" onsubmit="return confirm('Are you sure?');">
                    @csrf
                    @method('DELETE')
                    <button type="submit"
                    class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Delete
                </button>
                </form>
                
                
            </div>
        </div>
    </div>
    @empty
    <div class="col-span-3 text-center text-gray-500 py-4">
        No users found.
    </div>
    @endforelse
</div>

<!-- Pagination - consistent with reports page -->
<div class="mt-6 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
    <div class="px-4 py-3 flex items-center justify-between">
        <!-- Mobile pagination -->
        <div class="flex-1 flex justify-between sm:hidden">
            {{-- Previous Page --}}
            @if ($users->onFirstPage())
            <span
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
                Previous
            </span>
            @else
            <a href="{{ $users->previousPageUrl() }}"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
            </a>
            @endif

            {{-- Next Page --}}
            @if ($users->hasMorePages())
            <a href="{{ $users->nextPageUrl() }}"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
            </a>
            @else
            <span
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
                Next
            </span>
            @endif
        </div>

        <!-- Desktop pagination -->
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing <span class="font-medium">{{ $users->firstItem() }}</span>
                    to <span class="font-medium">{{ $users->lastItem() }}</span>
                    of <span class="font-medium">{{ $users->total() }}</span> users
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {{-- Previous Button --}}
                    @if ($users->onFirstPage())
                    <span
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </span>
                    @else
                    <a href="{{ $users->previousPageUrl() }}"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </a>
                    @endif

                    {{-- Page Numbers --}}
                    @php
                    $start = max(1, $users->currentPage() - 2);
                    $end = min($users->lastPage(), $users->currentPage() + 2);
                    @endphp

                    @if($start > 1)
                    <a href="{{ $users->url(1) }}"
                        class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        1
                    </a>
                    @if($start > 2)
                    <span
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                    </span>
                    @endif
                    @endif

                    @for ($i = $start; $i <= $end; $i++) @if ($i==$users->currentPage())
                        <span
                            class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </span>
                        @else
                        <a href="{{ $users->url($i) }}"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </a>
                        @endif
                        @endfor

                        @if($end < $users->lastPage())
                            @if($end < $users->lastPage() - 1)
                                <span
                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    ...
                                </span>
                                @endif
                                <a href="{{ $users->url($users->lastPage()) }}"
                                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                    {{ $users->lastPage() }}
                                </a>
                                @endif

                                {{-- Next Button --}}
                                @if ($users->hasMorePages())
                                <a href="{{ $users->nextPageUrl() }}"
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <span class="sr-only">Next</span>
                                    &raquo;
                                </a>
                                @else
                                <span
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400">
                                    <span class="sr-only">Next</span>
                                    &raquo;
                                </span>
                                @endif
                </nav>
            </div>
        </div>
    </div>
</div>


@include('layouts.modals.usermodal')
@include('layouts.modals.add-user-modal')
@include('layouts.modals.edit-user-modal')

@endsection
