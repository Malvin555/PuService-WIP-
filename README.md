# PuService - Laravel Version (`laravel-version` branch)

**PuService** is a role-based issue reporting web application built with **Laravel**. It includes three user roles — **Admin**, **User**, and **Worker** — each with its own dashboard and access permissions. This version offers a robust backend foundation using Laravel's MVC structure, middleware, and Blade templating.

---

## 🚀 Features

- **Public Landing Pages**  
  Includes Home, About, and Contact pages accessible without authentication.

- **Secure Authentication System**  
  Login, registration, and password recovery out of the box.

- **Role-Based Dashboards**  
  - **Admin**: Manage users, reports, and system settings  
  - **User**: Submit/view reports, manage profile and preferences  
  - **Worker**: View assigned tasks and manage task status

- **Route Protection via Middleware**  
  Ensures users can only access pages permitted by their role

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone -b laravel-version https://github.com/Malvin555/PuService.git
cd PuService
````

### 2. Install Dependencies

```bash
composer install
```

### 3. Configure Environment

Copy the example `.env` file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Configure your database and app settings inside `.env`:

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
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 4. Run the Development Server

```bash
php artisan serve
```

Access the app at: [http://localhost:8000](http://localhost:8000)

---

## 🧰 Tech Stack

* **Laravel** – PHP framework for scalable backend development
* **Blade** – Laravel's built-in templating engine
* **Tailwind CSS** – Utility-first CSS framework for styling
* **MariaDB / MySQL** – Relational database for structured data

---

## 🌱 Contributing

1. Fork this repository
2. Create a new branch (`feature/your-feature` or `fix/your-fix`)
3. Write your code and commit it
4. Submit a pull request with a detailed description

---

## 📄 License

This project is licensed under the **Occ-1.0** license.
See the [LICENSE](LICENSE) file for full details.

---

## 🔀 Other Versions

Looking for the **Next.js version**?
Switch to the `main` branch:

```bash
git checkout main
```

Each version is maintained separately in its own branch.
