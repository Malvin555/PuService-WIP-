@extends('layouts.app')

@section('title', 'Error 429 - Too Many Requests')

@section('content')
<div class="pt-16">
    <div class="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <div class="text-center">
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
                <svg class="w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            
            <h1 class="text-4xl font-bold text-gray-900 mb-2">429 Too Many Requests</h1>
            <p class="text-xl text-gray-600 mb-8">Please slow down. You've made too many requests in a short period of time.</p>
            
            <div class="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <a href="{{ url('/') }}" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Return to Home
                </a>
                <a href="javascript:history.back()" class="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Go Back
                </a>
            </div>
        </div>
        
        <div class="mt-12 text-center">
            <p class="text-sm text-gray-500">Please wait a moment before trying again.</p>
            <p class="text-sm text-gray-500 mt-2">If you continue to see this error, please contact support.</p>
            <a href="{{ url('/contact') }}" class="text-sm font-medium text-blue-600 hover:text-blue-500">Contact Support</a>
        </div>
    </div>
</div>
@endsection

