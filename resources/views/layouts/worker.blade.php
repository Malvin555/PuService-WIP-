<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Worker Dashboard') - PuService</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <style>
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="antialiased bg-gray-50 text-gray-900 font-sans">
    <div class="min-h-screen flex flex-col">
    <div class="flex flex-1">
        @include('layouts.partials.wsidebar')
        
        <div class="flex-1 flex flex-col md:ml-64">
            @include('layouts.partials.wnavbar')
            
            <main class="flex-1 p-4 md:p-6 overflow-auto bg-gray-50">
                @yield('content')
            </main>
            
            @include('layouts.partials.wafooter')
            
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
                    overlay.className = 'fixed inset-0 bg-black/45 bg-opacity-50 z-20 md:hidden';
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
            }
        });
    });
</script>
</body>
</html>

