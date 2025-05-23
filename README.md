# PuService - Next.js Version (Main Branch)

PuService is a role-based issue reporting web application built with **Next.js**. It supports three user roles — **Admin**, **User**, and **Worker** — each with its own dashboard and permissions. This version is the primary implementation of the app, focused on scalability, security, and modern web technologies.

---

## 🚀 Features

- **Public Landing Pages**  
  Includes Home, About, and Contact pages accessible without authentication.

- **Secure Authentication System**  
  Login, registration, and password recovery using NextAuth.js and JWT.

- **Role-Based Dashboards**  
  - **Admin**: Manage users, reports, and settings  
  - **User**: Submit and view reports, manage profile and settings  
  - **Worker**: Access assigned tasks and update progress

- **Access Control Middleware**  
  Route protection based on user roles for secure access management

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Malvin555/PuService.git
cd PuService
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Set your environment variables locally in `.env.local`, or through your hosting platform (e.g., Vercel).

Example:

```
MONGODB_URI=your_database_connection_string
JWT_SECRET=your_auth_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> ⚠️ Never commit sensitive variables to source control.

### 4. Start the Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧰 Tech Stack

* **Next.js** – React-based framework with SSR & static rendering
* **Tailwind CSS** – Utility-first CSS styling
* **TypeScript** – Static typing for reliability
* **MongoDB** – Standard database
* **JWT** – JSON Web Token for secure sessions

---

## 🗂 Laravel Version

Looking for the **Laravel implementation**?
Switch to the `laravel-version` branch:

```bash
git checkout laravel-version
```

Each version is maintained separately within its respective branch.

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch (`feature/your-feature` or `fix/your-bug`)
3. Commit and push your changes
4. Open a pull request

---

## 📄 License

Licensed under the **CCO-1.0**.
See the LICENSE file for more information.
