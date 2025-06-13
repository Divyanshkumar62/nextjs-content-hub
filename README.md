# 📖 Next.js Content Hub
A high-performance and scalable content hub built with Next.js, featuring Better Auth, Drizzle ORM, PostgreSQL, and Zustand for state management.
## 🚀 Features
- 🔒 Better Auth - Secure authentication system with enhanced user management.
- 📜 Drizzle ORM - Lightweight, type-safe database interactions.
- 🗄️ PostgreSQL - Reliable and scalable relational database.
- 🌊 Zustand - Minimalist state management for global app state.
- ⚡ Optimized API calls - Efficient data fetching and caching.

--- 

## 🛠️ Installation
Clone the repository:
git clone https://github.com/yourusername/nextjs-content-hub.git
cd nextjs-content-hub


Install dependencies:
npm install


Set up environment variables:
cp .env.example .env


Configure database:
npx drizzle-kit generate
npx drizzle-kit push


Run the development server:
npm run dev

---

## 🔧 Tech Stack
| Technology | Description | 
| Next.js | React framework for performance optimization. | 
| Better Auth | Secure authentication system. | 
| Drizzle ORM | Type-safe, lightweight ORM for database operations. | 
| PostgreSQL | Scalable relational database. | 
| Zustand | Global state management for minimal boilerplate. | 

---

### 🏗️ Project Structure
📦 nextjs-content-hub
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 lib
 ┃ ┣ 📂 hooks
 ┃ ┣ 📂 store
 ┣ 📂 migrations
 ┣ 📂 public
 ┣ 📜 drizzle.config.ts
 ┣ 📜 next.config.js
 ┣ 📜 package.json


### 🚀 Deployment
Vercel
- Install Vercel CLI: npm install -g vercel
- Run vercel and follow the instructions.
Docker
docker build -t nextjs-content-hub .
docker run -p 3000:3000 nextjs-content-hub
