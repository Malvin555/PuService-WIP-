@extends('layouts.user')

@section('title', 'PuService | User Profile')

@section('content')
<div class="pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Your Profile</h1>
            <p class="mt-2 text-lg text-gray-600">Manage your account information and preferences.</p>
        </div>

        <div class="bg-white shadow-sm overflow-hidden sm:rounded-lg border border-gray-100 mb-10">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Update your personal details.</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-medium">
                        {{ isset($user) ? substr($user->name, 0, 2) : 'JD' }}
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
                <form class="space-y-6" method="POST" action="{{ route('user.profile.update') }}">
                    @csrf
                    <div class=" gap-y-6 gap-x-4">
                        <div class="sm:col-span-3">
                            <label for="name" class="block text-sm font-medium text-gray-700">Username</label>
                            <div class="mt-1">
                                <input type="text" name="name" id="name" autocomplete="given-name" value="{{ $user->name }}" class="border px-2 py-3 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>

                        <div class="mt-2">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" value="{{ $user->email }}" class="border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>

                        <div class="mt-2">
                            <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone number</label>
                            <div class="mt-1">
                                <input type="text" name="phone_number" id="phone" autocomplete="tel" value="{{ $user->phone_number }}" class="border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>

                        <div class="mt-2">
                            <label for="address" class="block text-sm font-medium text-gray-700">Street address</label>
                            <div class="mt-1">
                                <input type="text" name="address" id="address" autocomplete="street-address" value="{{ $user->address }}" class=" border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Cancel
                        </button>
                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Password Section -->
        <div class="bg-white shadow-sm overflow-hidden sm:rounded-lg border border-gray-100 mb-10">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Password</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Update your password.</p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
                <form class="space-y-6" method="POST" action="{{ route('user.password.update') }}">
                    @csrf
                    <div>
                        <label for="current_password" class="block text-sm font-medium text-gray-700">Current password</label>
                        <div class="mt-1">
                            <input id="current_password" name="current_password" type="password"  class="border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>

                    <div>
                        <label for="new_password" class="block text-sm font-medium text-gray-700">New password</label>
                        <div class="mt-1">
                            <input id="new_password" name="new_password" type="password" autocomplete="new_password" class="border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>

                    <div>
                        <label for="new_password_confirmation" class="block text-sm font-medium text-gray-700">Confirm password</label>
                        <div class="mt-1">
                            <input id="new_password_confirmation" name="new_password_confirmation" type="password" autocomplete="new-password" class="border px-2 py-3  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Update password
                        </button>
                    </div>
                </form>
            </div>
        </div>

        
    </div>
</div>
@endsection

