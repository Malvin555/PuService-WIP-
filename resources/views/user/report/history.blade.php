@extends('layouts.user')

@section('title', 'PuService | User History')

@section('content')
<div class="pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Your Report History</h1>
            <p class="mt-2 text-lg text-gray-600">Track the status of all your submitted reports.</p>
        </div>

        <!-- Filters -->
        <div class="bg-white shadow-sm rounded-lg border border-gray-100 mb-6 p-4">
            <form method="GET" action="{{ route('user.report.history') }}" class="w-full">
                <div
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                    <!-- Filters Group -->
                    <div
                        class="flex flex-col sm:flex-row sm:items-center w-full sm:w-2/3 space-y-4 sm:space-y-0 sm:space-x-4">
                        <!-- Status Filter -->
                        <div class="flex-1">
                            <label for="status-filter"
                                class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select id="status-filter" name="status"
                                class="block w-full pl-3 pr-10 border px-2 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                onchange="this.form.submit()">
                                <option value="all" {{ request('status') == 'all' ? 'selected' : '' }}>All Statuses
                                </option>
                                <option value="pending" {{ request('status') == 'pending' ? 'selected' : '' }}>Pending
                                </option>
                                <option value="in_progress" {{ request('status') == 'in_progress' ? 'selected' : '' }}>
                                    In Progress</option>
                                <option value="resolved" {{ request('status') == 'resolved' ? 'selected' : '' }}>
                                    Resolved</option>
                            </select>
                        </div>

                        <!-- Category (Type) Filter -->
                        <div class="flex-1">
                            <label for="type-filter" class="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <select id="type-filter" name="type"
                                class="block w-full pl-3 pr-10 border px-2 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                onchange="this.form.submit()">
                                <option value="">All Types</option>
                                @foreach($categories as $category)
                                <option value="{{ $category->id }}"
                                    {{ request('type') == $category->id ? 'selected' : '' }}>
                                    {{ $category->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <!-- Search Input (Responsive) -->
                    <div class="w-full sm:w-1/3">
                        <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <div class="relative rounded-md shadow-sm">
                            <input type="text" name="search" id="search"
                                class="focus:ring-blue-500 focus:border-blue-500 block w-full border px-2 py-3 pr-10 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Search reports..." value="{{ request('search') }}">
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <!-- Reports List -->
        <div class="bg-white shadow-sm overflow-hidden sm:rounded-lg border border-gray-100 mb-10">
            <ul role="list" class="divide-y divide-gray-200">
                @forelse ($reports as $report )
                <li>
                <a href="#" class="text-sm text-blue-600 hover:text-blue-900" onclick="openModal('{{ $report->title }}', '{{ ucfirst($report->status) }}',  
        '{{ $report->category->name }}', '{{ $report->address }}', '{{ $report->description }}', '{{ $report->response }}', 
        '{{ $report->created_at->format('M d, Y') }}', '{{ asset('storage/' . $report->image_path) }}')">
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

        <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <!-- Previous Page Link -->
            @if ($reports->onFirstPage())
            <span
                class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 cursor-not-allowed">
                <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                Previous
            </span>
            @else
            <a href="{{ $reports->previousPageUrl() }}"
                class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" 5
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                Previous
            </a>
            @endif

            <!-- Pagination Links -->
            <div class="hidden md:-mt-px md:flex">
                @foreach ($reports->getUrlRange(1, $reports->lastPage()) as $page => $url)
                @if ($page == $reports->currentPage())
                <span
                    class="border-t-2 border-blue-500 pt-4 px-4 inline-flex items-center text-sm font-medium text-blue-600">
                    {{ $page }}
                </span>
                @else
                <a href="{{ $url }}"
                    class="border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    {{ $page }}
                </a>
                @endif
                @endforeach
            </div>

            <!-- Next Page Link -->
            @if ($reports->hasMorePages())
            <a href="{{ $reports->nextPageUrl() }}"
                class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Next
                <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            @else
            <span
                class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 cursor-not-allowed">
                Next
                <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            @endif
        </nav>

    </div>
</div>

@include('layouts.modals.infomodal')

@endsection
