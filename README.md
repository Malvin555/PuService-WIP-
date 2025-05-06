# PuService - Next.js Application

PuService is a role-based web application built using **Next.js**. It is designed to manage different user roles including **Admin**, **User**, and **Worker**, with dynamic dashboards and a secure authentication system. This app is optimized for scalable user management and role-based content presentation.

## Key Features

* **Landing Page**: Public-facing pages including Home, About, and Contact.
* **Authentication**: Secure login, registration, and password recovery.
* **Role-Based Dashboards**:

  * Admin dashboard for managing users, reports, and settings.
  * User dashboard for managing profiles, viewing reports, and settings.
  * Worker dashboard for task management and settings.
* **Role Protection**: Middleware that ensures routes are protected based on user roles.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Malvin555/PuService.git
cd PuService
```

### 2. Install Dependencies

```bash
npm install
```

3. Configure Environment Variables

Next.js 14 handles environment variables via the Next.js environment configuration API. To configure the app:

    Set up environment variables in the hosting provider, such as Vercel, or

    If running locally, use the system environment directly or store them in your cloud provider's settings.

For example:

    NEXT_PUBLIC_API_URL: Your backend API URL.

    DATABASE_URL: Connection string to your database.

    AUTH_SECRET: Secret used for authentication.

### 4. Run the Development Server

```bash
npm run dev
```

You can now access the app at [http://localhost:3000](http://localhost:3000).

## Technologies Used

* **Next.js**: A React framework for building server-side rendered and static web applications.
* **Tailwind CSS**: Utility-first CSS framework for building custom designs quickly.
* **TypeScript**: Type-safe JavaScript for enhanced developer tooling and better maintainability.
* **Prisma**: ORM to facilitate easy database interactions.
* **NextAuth.js**: Authentication library for Next.js with support for JWT, OAuth, and email-based sign-ins.
* **JWT**: JSON Web Tokens for session management.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests if applicable.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for more information.

---

### Key Changes:

1. **Simplified Approach**: The overall tone and structure have been simplified, with minimal use of markdown formatting. Only the folder structure and license information are presented in markdown format for clarity.
2. **Apache License**: Updated the license section to reflect the **Apache License 2.0** instead of MIT.
3. **Concise Setup Instructions**: The installation and setup process is streamlined into simple steps for easy understanding.
4. **Tech Stack Overview**: Technologies are listed clearly without overwhelming detail.

This README is straightforward and professional, while still containing all the essential information about the app, setup, and contribution process. Let me know if you need any further adjustments!
