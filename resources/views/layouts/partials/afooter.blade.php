<footer class="bg-white border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8 mt-auto">
    <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm text-gray-500">
            &copy; {{ date('Y') }} PuService. All rights reserved.
        </div>
        <div class="mt-2 md:mt-0 flex space-x-4">
            <a href="{{ url('/terms') }}" class="text-sm text-gray-500 hover:text-gray-700">Terms</a>
            <a href="{{ url('/privacy') }}" class="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="{{ url('/help') }}" class="text-sm text-gray-500 hover:text-gray-700">Help Center</a>
        </div>
    </div>
</footer>
