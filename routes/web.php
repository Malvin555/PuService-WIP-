<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\RoleMiddleware;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Worker\WorkerController;
use Illuminate\Queue\Worker;
use App\Http\Controllers\Admin\AdminController;

Route::get('/dashboard', function () {
    if (auth()->user()->role == 'admin') {
        return redirect('/admin');
    } elseif (auth()->user()->role == 'worker') {
        return redirect('/worker');
    } else {
        return redirect('/user');
    }
})->name('dashboard');

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
  })->name('about');

Route::get('/privacy', function () {
    return view('privacy');
  })->name('privacy');

Route::get('/terms', function () {
  return view('terms');
})->name('terms');

Route::get('/careers', function () {
    return view('careers');
  })->name('careers');


// Authentication Routes
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register.form');
Route::post('/register', [AuthController::class, 'register'])->name('register');

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login.form');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');


Route::middleware([RoleMiddleware::class . ':admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    Route::get('/admin/reports', [AdminController::class, 'allReports'])->name('admin.reports.index');
    Route::post('/admin/reports', [AdminController::class, 'storeReport'])->name('admin.reports.store');
    Route::post('admin/reports/update/{id}', [AdminController::class, 'updateReport'])->name('admin.reports.update');
    Route::delete('/admin/reports/{report}', [AdminController::class, 'destroyReport'])->name('admin.reports.destroy');


    Route::get('/admin/categories', [AdminController::class, 'categories'])->name('admin.categories.index');
    Route::post('/admin/categories', [AdminController::class, 'storeCategory'])->name('admin.categories.store');
    Route::delete('/admin/categories/{id}', [AdminController::class, 'destroy'])->name('admin.categories.destroy');

    Route::get('/admin/users', [AdminController::class, 'allUsers'])->name('admin.users.index');
    // In routes/web.php
    Route::post('/admin/users', [AdminController::class, 'storeUsers'])->name('admin.users.store');
    Route::delete('/admin/users/{id}', [AdminController::class, 'destroyUsers'])->name('admin.users.destroy');
    Route::put('/admin/users/{user}', [AdminController::class, 'updateUsers'])->name('admin.users.update');

    

    Route::get('/admin/profile', [AdminController::class, 'profile'])->name('admin.profile');
    Route::post('/admin/profile/update', [AdminController::class, 'updateProfile'])->name('admin.profile.update');
    Route::post('/admin/profile/password', [AdminController::class, 'updatePassword'])->name('admin.password.update');

    Route::get('/admin/reports/print', [AdminController::class, 'generatePDF'])->name('admin.reports.print');

});

Route::middleware([RoleMiddleware::class . ':worker'])->group(function () {
    Route::get('/worker', [WorkerController::class, 'dashboard'])->name('worker.dashboard');

    Route::get('/worker/reports', [WorkerController::class, 'allReports'])->name('worker.reports.index');
    Route::get('/worker/reports/pending', [WorkerController::class, 'allPending'])->name('worker.reports.pending');
    Route::get('/worker/reports/progress', [WorkerController::class, 'allProgress'])->name('worker.reports.progress');
    Route::get('/worker/reports/resolved', [WorkerController::class, 'allResolved'])->name('worker.reports.resolved');

    Route::post('/worker/reports/respond', [WorkerController::class, 'respond'])->name('worker.reports.respond');
    Route::delete('/worker/reports/{report}', [WorkerController::class, 'destroy'])->name('worker.reports.destroy');

    Route::get('/worker/profile', [WorkerController::class, 'profile'])->name('worker.profile');
    Route::post('/worker/profile/update', [WorkerController::class, 'updateProfile'])->name('worker.profile.update');
    Route::post('/worker/profile/password', [WorkerController::class, 'updatePassword'])->name('worker.password.update');


    Route::get('/worker/users', [WorkerController::class, 'allUsers'])->name('worker.users.index');

});

Route::middleware([RoleMiddleware::class . ':user'])->group(function () {

    Route::get('/user', [UserController::class, 'dashboard'])->name('user.dashboard');

    Route::get('/user/profile', [UserController::class, 'profile'])->name('user.profile');
    Route::post('/user/profile/update', [UserController::class, 'updateProfile'])->name('user.profile.update');
    Route::post('/user/profile/password', [UserController::class, 'updatePassword'])->name('user.password.update');

    Route::get('/user/notifications', function () {
        return view('user.notifications');
    })->name('user.notifications');

    Route::get('/user/reports/new', [UserController::class, 'createReport'])->name('user.report.new');
    Route::post('/user/reports/store', [UserController::class, 'storeReport'])->name('user.report.store');

    Route::get('/user/reports/history', [UserController::class, 'reportHistory'])->name('user.report.history');

});
