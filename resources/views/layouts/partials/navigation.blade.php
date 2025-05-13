<nav class="fixed w-full z-50 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <a href="/" class="flex-shrink-0 flex items-center">
                    <span class="text-xl font-semibold text-blue-600">PuService</span>
                </a>
                @if (request()->is('/'))
                <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
                    <a href="#home"
                        class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                        Home
                    </a>
                    <a href="#features"
                        class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                        Features
                    </a>
                    <a href="#about"
                        class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                        About
                    </a>
                </div>
                @endif
            </div>
            <div class="hidden sm:flex sm:items-center">
            @if (request()->is('/','login','register'))
                <a href="{{ route('login.form') }}" class="text-sm font-medium text-gray-700 hover:text-blue-600 mr-4">
                    Login
                </a>
                <a href="{{ route('register.form') }}"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Register
                </a>
            @endif
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
                <button id="mobile-menu-button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="sm:hidden hidden">

    @if (request()->is('/'))
        <div class="pt-2 pb-3 space-y-1">
            <a href="#"
                class="block pl-3 pr-4 py-2 border-l-4 border-blue-600 text-base font-medium text-blue-600 bg-blue-50">
                Home
            </a>
            <a href="#features"
                class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
                Features
            </a>
            <a href="#about"
                class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
                About
            </a>
        </div>
        @endif

        <div class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex items-center px-4 space-x-3">
                <a href="{{ route('login.form') }}"
                    class="block text-base font-medium text-gray-700 hover:text-blue-600">
                    Login
                </a>
                <a href="{{ route('register.form') }}"
                    class="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Register
                </a>
            </div>
        </div>
    </div>
</nav>

<script>
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("border-blue-600", "text-gray-900");
            link.classList.add("border-transparent", "text-gray-500");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("border-blue-600", "text-gray-900", "transition-all", "duration-300", "ease-in-out");
                link.classList.remove("text-gray-500", "border-transparent");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});



</script>
