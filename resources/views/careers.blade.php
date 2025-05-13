@extends('layouts.app')

@section('title', 'Careers - PuService')

@section('content')
<div class="pt-16">
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Join Our Mission to Transform Public Services
                    </h1>
                    <p class="mt-4 text-lg md:text-xl text-blue-100">
                        Build your career at PuService and help create more responsive, efficient, and transparent government services for all citizens.
                    </p>
                    <div class="mt-8">
                        <a href="#openings" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                            View Open Positions
                        </a>
                    </div>
                </div>
                <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                        <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team collaborating in modern office">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Why Join PuService?</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    We're building technology that makes a real difference in communities across the country.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Meaningful Work</h3>
                    <p class="text-gray-600">
                        Your work directly improves how citizens interact with government services and helps create more efficient, transparent public institutions.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation & Growth</h3>
                    <p class="text-gray-600">
                        We're at the forefront of civic technology, constantly exploring new ways to solve complex problems and improve public services.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                    <p class="text-gray-600">
                        Join a diverse team of passionate professionals who value collaboration, respect, and continuous learning.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Culture Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div class="relative lg:row-start-1 lg:col-start-2">
                    <div class="relative mx-auto max-w-md lg:max-w-none">
                        <img class="rounded-lg shadow-lg object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team meeting in modern office">
                    </div>
                </div>
                <div class="mt-10 lg:mt-0 lg:col-start-1">
                    <h2 class="text-3xl font-bold text-gray-900">Our Culture</h2>
                    <div class="mt-6 text-gray-600 space-y-4">
                        <p>
                            At PuService, we believe that great products come from great teams. We've built a culture that values:
                        </p>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Transparency</strong> - We share information openly and honestly, both internally and with our users.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Collaboration</strong> - We work together across teams and disciplines to solve complex problems.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Innovation</strong> - We encourage creative thinking and are not afraid to try new approaches.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Impact</strong> - We measure our success by the positive change we create in communities.</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Growth</strong> - We invest in our team's professional development and personal well-being.</span>
                            </li>
                        </ul>
                        <p>
                            We're building a team of diverse perspectives and backgrounds because we believe this leads to better products and a stronger company.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Benefits & Perks</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    We take care of our team so they can focus on taking care of our users.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Comprehensive Healthcare</h3>
                    <p class="text-gray-600">
                        Medical, dental, and vision coverage for you and your dependents, with the majority of premiums covered by PuService.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Flexible Work</h3>
                    <p class="text-gray-600">
                        Hybrid work options, flexible hours, and generous paid time off to help you maintain a healthy work-life balance.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
                    <p class="text-gray-600">
                        Competitive salary, equity options, and 401(k) matching to help you build your financial future.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Professional Development</h3>
                    <p class="text-gray-600">
                        Learning stipend, conference attendance, and dedicated time for professional growth and skill development.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Wellness Programs</h3>
                    <p class="text-gray-600">
                        Mental health resources, fitness reimbursements, and wellness days to support your physical and mental well-being.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Community Impact</h3>
                    <p class="text-gray-600">
                        Paid volunteer time and company-sponsored community service opportunities to give back to the communities we serve.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">What Our Team Says</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Hear directly from the people who make PuService great.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Employee portrait">
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium text-gray-900">Sarah Johnson</h4>
                            <p class="text-sm text-gray-500">Software Engineer</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "Working at PuService has been the most rewarding experience of my career. I get to solve challenging technical problems while knowing my work is making government services more accessible to everyone."
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Employee portrait">
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium text-gray-900">Michael Chen</h4>
                            <p class="text-sm text-gray-500">Product Manager</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "The culture at PuService is unlike anywhere I've worked before. There's a genuine commitment to our mission, and leadership truly values employee input and well-being."
                    </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Employee portrait">
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium text-gray-900">Elena Rodriguez</h4>
                            <p class="text-sm text-gray-500">Customer Success</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "I love that PuService encourages professional growth. I've been able to develop new skills, take on challenging projects, and advance my career while working with an amazing team."
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Open Positions Section -->
    <section id="openings" class="py-12 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Open Positions</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Join our team and help us build the future of public service technology.
                </p>
            </div>

            <div class="space-y-6">
                <!-- Engineering -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Engineering</h3>
                    <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-blue-600">Senior Full Stack Engineer</h4>
                                    <p class="text-sm text-gray-500 mt-1">San Francisco, CA or Remote</p>
                                </div>
                                <div class="mt-4 md:mt-0">
                                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Full-time
                                    </span>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-600">
                                We're looking for an experienced full stack engineer to help build and scale our platform. You'll work on challenging problems across our entire stack, from database design to frontend implementation.
                            </p>
                            <div class="mt-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-blue-600">Frontend Developer</h4>
                                    <p class="text-sm text-gray-500 mt-1">Remote</p>
                                </div>
                                <div class="mt-4 md:mt-0">
                                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Full-time
                                    </span>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-600">
                                Join our frontend team to create intuitive, accessible, and responsive user interfaces. You'll work closely with designers and backend engineers to deliver exceptional user experiences.
                            </p>
                            <div class="mt-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product & Design -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Product & Design</h3>
                    <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-blue-600">UX/UI Designer</h4>
                                    <p class="text-sm text-gray-500 mt-1">San Francisco, CA or Remote</p>
                                </div>
                                <div class="mt-4 md:mt-0">
                                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Full-time
                                    </span>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-600">
                                We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces that make complex government processes simple and accessible for all users.
                            </p>
                            <div class="mt-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-blue-600">Product Manager</h4>
                                    <p class="text-sm text-gray-500 mt-1">San Francisco, CA</p>
                                </div>
                                <div class="mt-4 md:mt-0">
                                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Full-time
                                    </span>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-600">
                                Join our product team to help define our product strategy and roadmap. You'll work closely with users, government agencies, and our engineering team to build features that solve real problems.
                            </p>
                            <div class="mt-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Operations & Support -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Operations & Support</h3>
                    <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-blue-600">Customer Success Manager</h4>
                                    <p class="text-sm text-gray-500 mt-1">Remote</p>
                                </div>
                                <div class="mt-4 md:mt-0">
                                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Full-time
                                    </span>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-600">
                                Help our government partners successfully implement and use our platform. You'll provide training, support, and strategic guidance to ensure our customers achieve their goals.
                            </p>
                            <div class="mt-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <p class="text-gray-600">Don't see the right position? We're always looking for talented people.</p>
                <a href="#" class="mt-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Send General Application
                </a>
            </div>
        </div>
    </section>

    <!-- Application Process Section -->
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Application Process</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    We've designed a straightforward process to help us get to know each other better.
                </p>
            </div>

            <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="bg-gray-50 px-3 text-lg font-medium text-gray-900">
                        How it works
                    </span>
                </div>
            </div>

            <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                <div class="text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <span class="text-lg font-semibold">1</span>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">Application Review</h3>
                    <p class="mt-2 text-gray-600">
                        Submit your application and our team will review your qualifications and experience.
                    </p>
                </div>

                <div class="text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <span class="text-lg font-semibold">2</span>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">Initial Interview</h3>
                    <p class="mt-2 text-gray-600">
                        Connect with our recruiting team to discuss your background and learn more about the role.
                    </p>
                </div>

                <div class="text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <span class="text-lg font-semibold">3</span>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">Team Interviews</h3>
                    <p class="mt-2 text-gray-600">
                        Meet with team members and leadership to dive deeper into your skills and experience.
                    </p>
                </div>

                <div class="text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <span class="text-lg font-semibold">4</span>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">Offer & Welcome</h3>
                    <p class="mt-2 text-gray-600">
                        Receive an offer and join our team with a comprehensive onboarding experience.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-16 bg-blue-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white">Ready to Make an Impact?</h2>
            <p class="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                Join our team and help transform how citizens interact with government services.
            </p>
            <div class="mt-8">
                <a href="#openings" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                    View Open Positions
                </a>
            </div>
        </div>
    </section>
</div>
@endsection

