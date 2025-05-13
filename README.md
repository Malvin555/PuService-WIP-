# PuService - Laravel Application

PuService is a role-based web application built using **Laravel**. It is designed to manage different user roles, including **Admin**, **User**, and **Worker**, with dynamic dashboards and a secure authentication system. This app is optimized for scalable user management and role-based content presentation.

## Key Features

* **Landing Page**: Public-facing pages including Home, About, and Contact.
* **Authentication**: Secure login, registration, and password recovery.
* **Role-Based Dashboards**:

  * **Admin Dashboard**: Manage users, reports, and settings.
  * **User Dashboard**: Manage profiles, view reports, and settings.
  * **Worker Dashboard**: Manage tasks and settings.
* **Role Protection**: Middleware ensures routes are protected based on user roles.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Malvin555/PuService.git
cd PuService
```

### 2. Install Dependencies

```bash
composer install
```

This will install all necessary dependencies using Composer.

### 3. Configure Environment Variables

Laravel uses an `.env` file for configuration. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Next, set up the database and environment variables. You can use `.env` to configure your app:

```
APP_NAME=PuService
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

### 4. Run the Development Server

You can now serve the Laravel app locally:

```bash
php artisan serve
```

By default, it will be available at [http://localhost:8000](http://localhost:8000).

## Technologies Used

* **Laravel**: A PHP framework for building modern web applications.
* **Blade**: Laravel's templating engine for creating dynamic web pages.
* **Tailwind CSS**: Utility-first CSS framework for building custom designs quickly.
* **MySQL**: Relational database management system to store data.
* **Laravel Sanctum**: Simple package for API token authentication.
* **Laravel Breeze**: Simple authentication scaffold for Laravel.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests if applicable.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for more information.
