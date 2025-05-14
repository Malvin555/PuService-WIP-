@extends('layouts.app')

@section('content')

    <!-- Add padding to account for fixed navbar -->
    <div class="pt-16">
        <!-- Hero Section -->
        <section id="home"  class="py-16 md:py-24 lg:py-32">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1 data-aos="fade-up">
                            <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500">Introducing</span>
                            <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                <span class="block text-gray-900">Modern Reporting</span>
                                <span class="block text-blue-600">for a Better Country</span>
                            </span>
                        </h1>
                        <p data-aos="fade-up" class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            PuService provides comprehensive reporting solutions that help government agencies and citizens track, analyze, and improve public services.
                        </p>
                        <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div class="sm:flex">
                                <a href="{{ route('register.form') }}" class="block w-full sm:w-auto rounded-md py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-center shadow-sm">
                                    Get Started
                                </a>
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=n_5tTXmATYKcpBeR&t=27" target="_blank" rel="noopener noreferrer" class="mt-3 sm:mt-0 sm:ml-3 block w-full sm:w-auto rounded-md py-3 px-6 bg-white hover:bg-gray-50 text-blue-600 font-medium text-center border border-gray-200 shadow-sm">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="People working on laptops">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
                    <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        A better way to report and track services
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Our platform provides comprehensive tools for citizens and government agencies.
                    </p>
                </div>

                <div class="mt-16">
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div data-aos="fade-up" class="pt-6">
                            <div class="flow-root bg-white rounded-lg px-6 pb-8">
                                <div class="-mt-6">
                                    <div>
                                        <span class="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Reporting</h3>
                                    <p class="mt-2 text-base text-gray-500">
                                        Submit reports quickly through our intuitive interface on web and mobile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="pt-6">
                            <div class="flow-root bg-white rounded-lg px-6 pb-8">
                                <div class="-mt-6">
                                    <div>
                                        <span class="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Real-time Updates</h3>
                                    <p class="mt-2 text-base text-gray-500">
                                        Get instant notifications and track report status in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="pt-6">
                            <div class="flow-root bg-white rounded-lg px-6 pb-8">
                                <div class="-mt-6">
                                    <div>
                                        <span class="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Data Analytics</h3>
                                    <p class="mt-2 text-base text-gray-500">
                                        Access analytics and visualizations to understand service performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="pt-6">
                            <div class="flow-root bg-white rounded-lg px-6 pb-8">
                                <div class="-mt-6">
                                    <div>
                                        <span class="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure Platform</h3>
                                    <p class="mt-2 text-base text-gray-500">
                                        Your data is protected with enterprise-grade security and compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">About Us</h2>
                    <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Dedicated to improving public services
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        PuService bridges the gap between citizens and government services.
                    </p>
                </div>

                <div class="mt-16">
                    <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div class="relative lg:row-start-1 lg:col-start-2">
                            <div class="relative mx-auto max-w-md">
                                <img class="rounded-lg shadow-lg object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team working on reports">
                            </div>
                        </div>
                        <div data-aos="fade-up" class="mt-10 lg:mt-0 lg:col-start-1">
                            <div class="prose prose-blue text-gray-500 mx-auto lg:max-w-none">
                                <p class="text-lg">
                                    Founded in 2023, PuService has quickly become the leading platform for public service reporting and analytics in our country.
                                </p>
                                <p>
                                    Our team combines expertise in technology, public administration, and data science to create innovative solutions that empower citizens and government agencies alike.
                                </p>
                                <p>
                                    We believe that transparent, efficient public services are the foundation of a thriving society. By providing tools that facilitate communication, tracking, and analysis, we help create a more responsive and accountable government.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
                    <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Trusted by agencies and citizens
                    </p>
                </div>
                <div class="mt-16">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div data-aos="fade-up" class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <div class="flex items-center mb-4">
                                <div class="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User avatar">
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-base font-medium text-gray-900">Sarah Johnson</h4>
                                    <p class="text-xs text-gray-500">Citizen</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600">
                                "PuService made it so easy to report issues in my neighborhood. I received updates throughout the process and the issue was resolved within a week!"
                            </p>
                        </div>

                        <div data-aos="fade-up" class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <div class="flex items-center mb-4">
                                <div class="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User avatar">
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-base font-medium text-gray-900">Michael Chen</h4>
                                    <p class="text-xs text-gray-500">Department Manager</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600">
                                "The analytics provided by PuService have transformed how we allocate resources. We've improved our response times by 40% since implementing the system."
                            </p>
                        </div>

                        <div data-aos="fade-up" class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <div class="flex items-center mb-4">
                                <div class="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User avatar">
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-base font-medium text-gray-900">Elena Rodriguez</h4>
                                    <p class="text-xs text-gray-500">City Planner</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600">
                                "The data we collect through PuService has been invaluable for our urban planning initiatives. We can now identify patterns and address systemic issues proactively."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- CTA Section -->
        <section class="bg-blue-600">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    <span class="block">Ready to get started?</span>
                    <span class="block text-blue-200">Join thousands of satisfied users today.</span>
                </h2>
                <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div class="inline-flex rounded-md shadow">
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
