import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-emerald-600">
                PuService
              </span>
            </a>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <a
                href="#home"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-emerald-600 ease-in-out"
              >
                Home
              </a>
              <a
                href="#features"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-emerald-600 ease-in-out"
              >
                Features
              </a>
              <a
                href="#about"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-emerald-600 ease-in-out"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a
              href="{{ route('login.form') }}"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 mr-4"
            >
              Login
            </a>
            <Button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              Register
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="flex items-center justify-center text-emerald-600"
            >
              <svg
                className="w-[50px]"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="sm:hidden hidden">
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-blue-600 text-base font-medium text-blue-600 bg-blue-50"
          >
            Home
          </a>
          <a
            href="#features"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
          >
            Features
          </a>
          <a
            href="#about"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
          >
            About
          </a>
        </div>

        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 space-x-3">
            <a
              href="{{ route('login.form') }}"
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </a>
            <a
              href="{{ route('register.form') }}"
              className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
