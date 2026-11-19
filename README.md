# 🛒 Full Stack E-Commerce Application

A feature-rich, full-stack e-commerce application developed from scratch as part of the **CodeAlpha Full Stack Development Internship**.

Built with React, TypeScript, Express.js, and PostgreSQL, this application provides a complete online shopping experience with secure authentication, payment integration, product management, and real-time customer communication.

## ✨ Features

### 🛍️ E-Commerce
- Product listing and product management.
- Shopping cart functionality.
- Order management and processing.
- Payment integration with Polar.
- Admin dashboard for managing products.

### 🔐 Authentication & Security
- Secure authentication using Clerk.
- Protected application functionality.
- Backend authentication integration.

### 💬 Real-Time Customer Support
- Real-time messaging powered by Stream Chat.
- Video calling using Stream Video.
- Typing indicators.
- Message reactions.
- Threaded conversations.
- File sharing.
- GIF support.

### 🖼️ Image Management
- Image uploads using ImageKit.
- Image optimization and delivery.

### 📊 Monitoring & Performance
- Error tracking using Sentry.
- Application monitoring.
- Performance tracking.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 19, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 4, DaisyUI 5 |
| Routing | React Router |
| Data Fetching | TanStack Query |
| State Management | Zustand |
| Backend | Node.js, Express.js 5, TypeScript |
| Database | PostgreSQL (Neon) |
| ORM | Drizzle ORM |
| Authentication | Clerk |
| Payments | Polar |
| Real-Time Communication | Stream Chat, Stream Video |
| Image Management | ImageKit |
| Monitoring | Sentry |
| Containerization | Docker |

## 📁 Project Structure

```text
codealpha_tasks/
│
├── backend/
│   ├── src/
│   ├── scripts/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the application locally.

### Prerequisites

Make sure you have installed:

- [Node.js 22](https://nodejs.org/)
- npm
- [PostgreSQL / Neon](https://neon.com/)
- Git

You will also need accounts and API credentials for Clerk, Stream, Polar, ImageKit, and Sentry.

### 1. Clone the Repository

```bash
git clone https://github.com/ThanzeelMuhaideen/codealpha_tasks.git
```

Navigate into the project:

```bash
cd codealpha_tasks
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory and configure the required environment variables.

### 3. Database Setup

The application uses PostgreSQL hosted on Neon with Drizzle ORM.

Configure your PostgreSQL connection string in the backend `.env` file:

```env
DATABASE_URL=your_postgresql_connection_string
```

Push the database schema:

```bash
npm run db:push
```

Seed the database with initial data:

```bash
npm run db:seed
```

### 4. Start the Backend

```bash
npm run dev
```

The backend development server will start using the configured port.

### 5. Frontend Setup

Open another terminal from the project root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the frontend directory and configure the frontend environment variables.

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local development URL in your terminal.

## 🧪 Environment Variables

Create the following environment files and replace the placeholders with your actual credentials.

### Backend (`backend/.env`)

```env
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL=your_postgresql_connection_string

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Sentry
SENTRY_DSN=your_sentry_dsn

# Stream Chat & Video
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Frontend URL
FRONTEND_URL=your_frontend_url

# Polar Payments
POLAR_ACCESS_TOKEN=your_polar_access_token
POLAR_WEBHOOK_SECRET=your_polar_webhook_secret
POLAR_API_BASE=your_polar_api_base_url
POLAR_CHECKOUT_PRODUCT_ID=your_polar_product_id
```

### Frontend (`frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_SENTRY_DSN=your_sentry_dsn
VITE_API_URL=your_backend_api_url
```

**Security Note:** Never commit `.env` files, secret keys, API tokens, or database credentials to GitHub. Keep all sensitive credentials in environment variables.

## 📜 Available Scripts

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with automatic reload |
| `npm run build` | Compile TypeScript |
| `npm start` | Start the production server |
| `npm run db:push` | Push database schema using Drizzle Kit |
| `npm run db:seed` | Seed the database |

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## 🐳 Docker Deployment

The repository includes a multi-stage Dockerfile that builds the React frontend and Express backend into a single deployable application.

Build the Docker image from the project root:

```bash
docker build \
  --build-arg VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key \
  -t codealpha-ecommerce .
```

Run the container with your production environment variables configured:

```bash
docker run -p 3001:3001 --env-file backend/.env codealpha-ecommerce
```

The application exposes port `3001` inside the container.

Make sure the production environment variables and external service configurations are correctly configured before deployment.

## 🎓 Internship

This project was developed as part of the **CodeAlpha Full Stack Development Internship**.

The internship provided an opportunity to apply full-stack development concepts and work with modern web technologies while building a real-world e-commerce application.

## 👨‍💻 Developer

**Thanzeel Muhaideen**

- GitHub: [@ThanzeelMuhaideen](https://github.com/ThanzeelMuhaideen)
- Project Repository: [CodeAlpha Tasks](https://github.com/ThanzeelMuhaideen/codealpha_tasks)

---

⭐ If you find this project interesting, consider giving the repository a star!
