@extends('layouts.worker')

@section('title', 'All Reports')

@section('content')
<div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
        <h1 class="text-2xl font-bold text-gray-900">All Reports</h1>
        <p class="mt-1 text-sm text-gray-600">Manage and respond to user reports.</p>
    </div>
    <div class="mt-4 md:mt-0">
        <form action="{{ route('worker.reports.index') }}" method="GET">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type="text" name="search" value="{{ request('search') }}"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search reports...">
            </div>
        </form>
    </div>

</div>


<div class="md:hidden  space-y-4">
    @if($reports->isEmpty())
    <p class="text-gray-500">No reports found.</p>
    @else
    @foreach ($reports as $report)
    <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="p-4 border-b border-gray-300">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-lg font-medium text-blue-600">{{ $report->title }}</h3>
                    <p class="text-sm text-gray-500">#{{ $report->id }} • {{ $report->category->name }}</p>
                </div>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full
    {{ $report->status == 'resolved' ? 'bg-green-100 text-green-800' :
       ($report->status == 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
       'bg-gray-100 text-gray-800') }}">
                    {{ ucwords(str_replace('_', ' ', $report->status)) }}
                </span>

            </div>
        </div>
        <div class="px-4 py-3 bg-gray-50">
            <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                    <p>{{ $report->user->name ?? 'Unknown' }} • {{ $report->created_at->format('Y-m-d') }}</p>
                </div>
                <div class="flex space-x-2">
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-900" onclick="openModal('{{ $report->title }}', '{{ $report->status == 'in_progress' ? 'In Progress' : ucfirst($report->status) }}',
        '{{ $report->category->name }}', '{{ $report->address }}', '{{ $report->description }}',
        '{{ $report->created_at->format('M d, Y') }}', '{{ asset('storage/' . $report->image_path) }}')">View</a>
                    <a href="#" class="text-sm text-green-600 hover:text-green-900">Respond</a>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    @endif
</div>

<!-- Table view -->
<div class="hidden md:block bg-white shadow-sm rounded-lg overflow-hidden">
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted
                        By</th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @if($reports->isEmpty())
                <p class="text-gray-500 hidden">No reports found.</p>
                @else
                @foreach ($reports as $report)
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{{ $report->id }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs truncate">
                        {{ $report->title }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $report->category->name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full
    {{ $report->status == 'resolved' ? 'bg-green-100 text-green-800' :
       ($report->status == 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
       'bg-gray-100 text-gray-800') }}">
                            {{ ucwords(str_replace('_', ' ', $report->status)) }}
                        </span>


                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $report->user->name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ $report->created_at->format('Y-m-d') }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div class="flex space-x-2">
                        
                         <a href="#" class="text-sm text-blue-600 hover:text-blue-900"
                            onclick="document.getElementById('deleteForm').action = '/worker/reports/{{ $report->id }}';
                                     openModal('{{ $report->title }}', '{{ $report->status == 'in_progress' ? 'In Progress' : ucfirst($report->status) }}',
                                     '{{ $report->category->name }}', '{{ $report->address }}', '{{ $report->description }}',
                                     '{{ $report->response }}',
                                     '{{ $report->created_at->format('M d, Y') }}', '{{ asset('storage/' . $report->image_path) }}')">
                            View
                        </a>

                            <a href="#" class="text-sm text-green-600 hover:text-green-900"
                                onclick="openRespondModal('{{ $report->id }}', '{{ $report->status }}','{{ $report->response }}')">Respond</a>
                        </div>
                    </td>
                </tr>
                @endforeach
                @endif
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <div class="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6 flex items-center justify-between">
        <div class="flex-1 flex justify-between sm:hidden">
            {{-- Previous Page --}}
            @if ($reports->onFirstPage())
            <span
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
                Previous
            </span>
            @else
            <a href="{{ $reports->previousPageUrl() }}"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
            </a>
            @endif

            {{-- Next Page --}}
            @if ($reports->hasMorePages())
            <a href="{{ $reports->nextPageUrl() }}"
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

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing <span class="font-medium">{{ $reports->firstItem() }}</span>
                    to <span class="font-medium">{{ $reports->lastItem() }}</span>
                    of <span class="font-medium">{{ $reports->total() }}</span> results
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {{-- Previous Button --}}
                    @if ($reports->onFirstPage())
                    <span
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </span>
                    @else
                    <a href="{{ $reports->previousPageUrl() }}"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </a>
                    @endif

                    {{-- Page Numbers --}}
                    @for ($i = 1; $i <= $reports->lastPage(); $i++)
                        @if ($i == $reports->currentPage())
                        <span
                            class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </span>
                        @else
                        <a href="{{ $reports->url($i) }}"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </a>
                        @endif
                        @endfor

                        {{-- Next Button --}}
                        @if ($reports->hasMorePages())
                        <a href="{{ $reports->nextPageUrl() }}"
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

<!-- Mobile pagination -->
<div class="mt-4 flex justify-between items-center md:hidden">
    {{-- Previous Button --}}
    @if ($reports->onFirstPage())
    <span class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
        Previous
    </span>
    @else
    <a href="{{ $reports->previousPageUrl() }}"
        class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Previous
    </a>
    @endif

    {{-- Current Page Info --}}
    <span class="text-sm text-gray-500">Page {{ $reports->currentPage() }} of {{ $reports->lastPage() }}</span>

    {{-- Next Button --}}
    @if ($reports->hasMorePages())
    <a href="{{ $reports->nextPageUrl() }}"
        class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Next
    </a>
    @else
    <span class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
        Next
    </span>
    @endif
</div>

@include('layouts.modals.infomodal')
@include('layouts.modals.respond')


@endsection
