import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold text-blue-600">PuService</span>
                    </a>
                    @if (request()->is('/'))
                    <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                        <a href="#home"
                            className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                            Home
                        </a>
                        <a href="#features"
                            className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                            Features
                        </a>
                        <a href="#about"
                            className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ease-in-out">
                            About
                        </a>
                    </div>
                    @endif
                </div>
                <div className="hidden sm:flex sm:items-center">
                @if (request()->is('/','login','register'))
                    <a href="{{ route('login.form') }}" className="text-sm font-medium text-gray-700 hover:text-blue-600 mr-4">
                        Login
                    </a>
                    <a href="{{ route('register.form') }}"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Register
                    </a>
                @endif
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                    <button id="mobile-menu-button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path className="inline-flex" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" className="sm:hidden hidden">

        @if (request()->is('/'))
            <div className="pt-2 pb-3 space-y-1">
                <a href="#"
                    className="block pl-3 pr-4 py-2 border-l-4 border-blue-600 text-base font-medium text-blue-600 bg-blue-50">
                    Home
                </a>
                <a href="#features"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
                    Features
                </a>
                <a href="#about"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
                    About
                </a>
            </div>
            @endif

            <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 space-x-3">
                    <a href="{{ route('login.form') }}"
                        className="block text-base font-medium text-gray-700 hover:text-blue-600">
                        Login
                    </a>
                    <a href="{{ route('register.form') }}"
                        className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Register
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}
