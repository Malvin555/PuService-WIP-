<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>@yield('title', 'Admin Dashboard') - PuService</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  
  <style>
      [x-cloak] { display: none !important; }
      
      /* Admin-specific styles */
      .admin-sidebar {
          background-color: #1e3a8a; /* Darker blue for admin */
      }
      
      .admin-sidebar a {
          color: rgba(255, 255, 255, 0.7);
      }
      
      .admin-sidebar a:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
      }
      
      .admin-sidebar a.active {
          color: white;
          background-color: rgba(255, 255, 255, 0.2);
      }
      
      .admin-sidebar h3 {
          color: rgba(255, 255, 255, 0.5);
      }
      
      /* Responsive improvements */
      @media (max-width: 640px) {
          .table-responsive {
              display: block;
              width: 100%;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
          }
      }
  </style>
</head>
<body class="antialiased bg-gray-100 text-gray-900 font-sans">
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-1">
        @include('layouts.partials.asidebar')
        
        <div class="flex-1 flex flex-col md:ml-64 transition-all duration-300 ease-in-out">
            @include('layouts.partials.anavbar')
            
            <main class="flex-1 p-4 md:p-6 overflow-auto bg-gray-100">
                @yield('content')
            </main>
            
            @include('layouts.partials.afooter')
        </div>
    </div>
  </div>

  <script>
  document.addEventListener('DOMContentLoaded', function() {
      // Mobile sidebar toggle
      const sidebarToggle = document.getElementById('sidebar-toggle');
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.querySelector('.md\\:ml-64');
      
      if (sidebarToggle && sidebar) {
          sidebarToggle.addEventListener('click', function() {
              sidebar.classList.toggle('-translate-x-full');
              
              // On mobile, when sidebar is open, add overlay
              if (!sidebar.classList.contains('-translate-x-full')) {
                  const overlay = document.createElement('div');
                  overlay.id = 'sidebar-overlay';
                  overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden';
                  document.body.appendChild(overlay);
                  
                  overlay.addEventListener('click', function() {
                      sidebar.classList.add('-translate-x-full');
                      overlay.remove();
                  });
              } else {
                  const overlay = document.getElementById('sidebar-overlay');
                  if (overlay) overlay.remove();
              }
          });
      }
      
      // Close sidebar when window resizes to desktop size
      window.addEventListener('resize', function() {
          if (window.innerWidth >= 768) { // md breakpoint
              const overlay = document.getElementById('sidebar-overlay');
              if (overlay) overlay.remove();
              
              // Ensure sidebar is visible on desktop
              if (sidebar) {
                  sidebar.classList.remove('-translate-x-full');
              }
          }
      });
      
      // Make tables responsive
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
          const parent = table.parentNode;
          if (!parent.classList.contains('table-responsive')) {
              const wrapper = document.createElement('div');
              wrapper.className = 'table-responsive';
              parent.insertBefore(wrapper, table);
              wrapper.appendChild(table);
          }
      });

      // Toggle dropdowns
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      dropdownToggles.forEach(toggle => {
          toggle.addEventListener('click', function() {
              const dropdownContent = this.nextElementSibling;
              dropdownContent.classList.toggle('hidden');
          });
      });
  });
</script>
</body>
</html>
