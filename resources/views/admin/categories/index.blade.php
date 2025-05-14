@extends('layouts.admin')

@section('title', 'Category Management')

@section('content')
<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <div>
        <h1 class="text-2xl font-bold text-gray-900">Category Management</h1>
        <p class="mt-1 text-sm text-gray-600">View and manage product categories.</p>
        
    </div>
</div>


    <!-- Add Category Button -->
<div class="my-6 flex justify-end">
    <button type="button" onclick="showAddCategoryModal()"
        class="inline-flex text-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Category
    </button>
</div>

<!-- Card Grid View -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    @forelse($categories as $category)
    <div class="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
        <div class="p-4 flex items-start justify-between">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-12 w-12">
                    <div
                        class="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">
                        {{ substr($category->name, 0, 2) }}
                    </div>
                </div>
                <div class="ml-4">
                    <div class="text-base font-medium text-gray-900">{{ $category->name }}</div>
                    <div class="text-sm text-gray-500">ID: #00{{ $category->id }}</div>
                </div>
            </div>
            <div>
                <form method="POST" action="{{ route('admin.categories.destroy', $category->id) }}" class="inline-block">
                    @csrf
                    @method('DELETE')
                    <button type="submit" onclick="return confirm('Are you sure you want to delete this category?')"
                        class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
    @empty
    <div class="col-span-3 text-center text-gray-500 py-4">
        No categories found.
    </div>
    @endforelse
</div>



<!-- Pagination -->
<div class="mt-6 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
    <div class="px-4 py-3 flex items-center justify-between">
        <!-- Mobile pagination -->
        <div class="flex-1 flex justify-between sm:hidden">
            {{-- Previous Page --}}
            @if ($categories->onFirstPage())
            <span
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
                Previous
            </span>
            @else
            <a href="{{ $categories->previousPageUrl() }}"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
            </a>
            @endif

            {{-- Next Page --}}
            @if ($categories->hasMorePages())
            <a href="{{ $categories->nextPageUrl() }}"
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
                    Showing <span class="font-medium">{{ $categories->firstItem() }}</span>
                    to <span class="font-medium">{{ $categories->lastItem() }}</span>
                    of <span class="font-medium">{{ $categories->total() }}</span> categories
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {{-- Previous Button --}}
                    @if ($categories->onFirstPage())
                    <span
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </span>
                    @else
                    <a href="{{ $categories->previousPageUrl() }}"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        &laquo;
                    </a>
                    @endif

                    {{-- Page Numbers --}}
                    @php
                    $start = max(1, $categories->currentPage() - 2);
                    $end = min($categories->lastPage(), $categories->currentPage() + 2);
                    @endphp

                    @if($start > 1)
                    <a href="{{ $categories->url(1) }}"
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

                    @for ($i = $start; $i <= $end; $i++) @if ($i==$categories->currentPage())
                        <span
                            class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </span>
                        @else
                        <a href="{{ $categories->url($i) }}"
                            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {{ $i }}
                        </a>
                        @endif
                        @endfor

                        @if($end < $categories->lastPage())
                            @if($end < $categories->lastPage() - 1)
                                <span
                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    ...
                                </span>
                                @endif
                                <a href="{{ $categories->url($categories->lastPage()) }}"
                                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                    {{ $categories->lastPage() }}
                                </a>
                                @endif

                                {{-- Next Button --}}
                                @if ($categories->hasMorePages())
                                <a href="{{ $categories->nextPageUrl() }}"
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

<!-- Add Category Modal -->
<div id="addCategoryModal" class="fixed inset-0 z-50 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex bg-black/50 items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Add New Category
                        </h3>
                        <div class="mt-4">
                            <form id="addCategoryForm" method="POST" action="{{ route('admin.categories.store') }}">
                                @csrf
                                <div class="mb-4">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Category Name</label>
                                    <input type="text" name="name" id="name" class="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="submit" form="addCategoryForm" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Save
                </button>
                <button type="button" onclick="hideAddCategoryModal()" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div>

<script>
    // Add Category Modal Functions
    function showAddCategoryModal() {
        document.getElementById('addCategoryModal').classList.remove('hidden');
    }
    
    function hideAddCategoryModal() {
        document.getElementById('addCategoryModal').classList.add('hidden');
    }
</script>
@endsection
