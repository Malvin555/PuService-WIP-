<aside id="sidebar" class="bg-white border-r border-gray-200 w-64 fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-30 overflow-y-auto">
  <style>
      @media (max-width: 767px) {
          #sidebar {
              width: 80%;
              max-width: 256px;
          }
      }
  </style>
  <div class="flex flex-col h-full">
      <!-- Logo -->
      <div class="flex items-center justify-center h-16 border-b border-gray-200">
          <a href="{{ route('worker.dashboard') }}" class="text-xl font-semibold text-blue-600">
              PuService <span class="text-sm font-medium text-gray-500">Worker</span>
          </a>
      </div>
      
      <!-- Navigation -->
      <nav class="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          <a href="{{ route('worker.dashboard') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/dashboard') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
          </a>

          <div class="mt-8 mb-2 px-3">
              <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Reports</h3>
          </div>
          
          <a href="{{ url('/worker/reports') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker/reports') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/reports') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              All Reports
          </a>
          
          <a href="{{ url('/worker/reports/pending') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker/reports/pending') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/reports/pending') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pending
          </a>
          
          <a href="{{ url('/worker/reports/progress') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker/reports/progress') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/reports/progress') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              In Progress
          </a>
          
          <a href="{{ url('/worker/reports/resolved') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker/reports/resolved') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/reports/resolved') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Resolved
          </a>

          <div class="mt-8 mb-2 px-3">
              <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Management</h3>
          </div>
          
          <a href="{{ url('/worker/users') }}" class="flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->is('worker/users*') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' }}">
              <svg class="mr-3 h-5 w-5 {{ request()->is('worker/users*') ? 'text-blue-500' : 'text-gray-400' }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              User Management
          </a>
      </nav>
      
      <!-- Profile section -->
      <div class="border-t border-gray-200 p-4">
          <div class="flex items-center">
              <div class="flex-shrink-0">
                  <div class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {{ substr(auth()->user()->name, 0, 2) }}
                  </div>
              </div>
              <div class="ml-3">
                  <p class="text-sm font-medium text-gray-700">{{ auth()->user()->name }}</p>
                  <a href="{{ url('/worker/profile') }}" class="text-xs font-medium text-gray-500 hover:text-blue-600">View profile</a>
              </div>
          </div>
      </div>
  </div>
</aside>

