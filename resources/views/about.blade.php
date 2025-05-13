@extends('layouts.app')

@section('title', 'About Us - PuService')

@section('content')
<div class="pt-16">
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
            <div class="text-center">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">About PuService</h1>
                <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
                    Transforming public service reporting through innovation and technology
                </p>
            </div>
        </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <div class="mt-6 text-gray-600 space-y-4">
                        <p>
                            At PuService, our mission is to bridge the gap between citizens and government services through innovative technology solutions. We believe that transparent, efficient public services are the foundation of a thriving society.
                        </p>
                        <p>
                            We're dedicated to creating a platform that empowers citizens to easily report issues, track progress, and engage with their local government. Simultaneously, we provide government agencies with powerful tools to manage, analyze, and respond to citizen reports efficiently.
                        </p>
                        <p>
                            By facilitating clear communication and accountability, we help create more responsive and effective public services for everyone.
                        </p>
                    </div>
                </div>
                <div class="mt-10 lg:mt-0">
                    <img class="rounded-lg shadow-lg object-cover w-full h-auto" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team collaborating on public service solutions">
                </div>
            </div>
        </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Story</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    From a simple idea to a comprehensive reporting platform
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                    <p class="text-gray-600">
                        Founded in 2023, PuService began with a simple observation: citizens needed a better way to report public service issues, and government agencies needed better tools to manage those reports. Our founders, with backgrounds in technology and public administration, set out to create a solution.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Growth & Development</h3>
                    <p class="text-gray-600">
                        What started as a basic reporting tool quickly evolved into a comprehensive platform. We partnered with several local municipalities to pilot our system, gathering valuable feedback and continuously improving our services. Our team grew from 3 to 25 dedicated professionals.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Today & Beyond</h3>
                    <p class="text-gray-600">
                        Today, PuService is used by over 50 municipalities nationwide, helping millions of citizens report and track issues in their communities. We continue to innovate, adding features like real-time updates, advanced analytics, and mobile applications. Our vision is to become the global standard for public service reporting.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Team Section -->
    <section class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Meet the dedicated professionals behind PuService
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO portrait" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900">Michael Chen</h3>
                    <p class="text-blue-600 font-medium">CEO & Co-Founder</p>
                    <p class="mt-2 text-gray-600">
                        Former Director of Digital Services with 15+ years of experience in government technology solutions.
                    </p>
                </div>

                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CTO portrait" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                    <p class="text-blue-600 font-medium">CTO & Co-Founder</p>
                    <p class="mt-2 text-gray-600">
                        Tech innovator with a background in data science and civic technology. Previously led engineering at GovTech.
                    </p>
                </div>

                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                        <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="COO portrait" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900">David Rodriguez</h3>
                    <p class="text-blue-600 font-medium">COO</p>
                    <p class="mt-2 text-gray-600">
                        Operations expert with extensive experience in public administration and service delivery optimization.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Values</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    The principles that guide everything we do
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div class="flex-shrink-0 mr-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                        <p class="text-gray-600">
                            We believe in open communication and visibility throughout the reporting process. Citizens deserve to know the status of their reports, and government agencies benefit from clear, accessible data.
                        </p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div class="flex-shrink-0 mr-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Security & Privacy</h3>
                        <p class="text-gray-600">
                            We implement the highest standards of data protection to ensure that personal information is secure. We're committed to maintaining the trust of both citizens and government agencies.
                        </p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div class="flex-shrink-0 mr-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                        <p class="text-gray-600">
                            Our platform is designed to be accessible to all citizens, regardless of technical ability or physical limitations. We believe that public services should be available to everyone.
                        </p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div class="flex-shrink-0 mr-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                        <p class="text-gray-600">
                            We continuously seek new ways to improve our platform and the public service reporting process. By embracing emerging technologies, we stay at the forefront of civic tech solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 md:py-16 bg-blue-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold">Our Impact</h2>
                <p class="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
                    Making a difference in communities across the country
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold">50+</div>
                    <p class="mt-2 text-blue-100">Municipalities Served</p>
                </div>

                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold">1M+</div>
                    <p class="mt-2 text-blue-100">Reports Processed</p>
                </div>

                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold">85%</div>
                    <p class="mt-2 text-blue-100">Resolution Rate</p>
                </div>

                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold">40%</div>
                    <p class="mt-2 text-blue-100">Faster Response Time</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Partners Section -->
    <section class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Partners</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Working together to improve public services
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div class="flex justify-center">
                    <div class="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity">
                        <svg class="h-full w-auto text-gray-400" viewBox="0 0 160 40" fill="currentColor">
                            <rect width="160" height="40" rx="8" />
                        </svg>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity">
                        <svg class="h-full w-auto text-gray-400" viewBox="0 0 160 40" fill="currentColor">
                            <rect width="160" height="40" rx="8" />
                        </svg>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity">
                        <svg class="h-full w-auto text-gray-400" viewBox="0 0 160 40" fill="currentColor">
                            <rect width="160" height="40" rx="8" />
                        </svg>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity">
                        <svg class="h-full w-auto text-gray-400" viewBox="0 0 160 40" fill="currentColor">
                            <rect width="160" height="40" rx="8" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
                <div class="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-white">Ready to transform public service reporting?</h2>
                        <p class="mt-2 text-blue-100 max-w-3xl">
                            Join the growing number of municipalities using PuService to improve citizen engagement and service delivery.
                        </p>
                    </div>
                    <div class="mt-8 md:mt-0 md:ml-8 md:flex-shrink-0">
                        <a href="{{ url('/register') }}" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
