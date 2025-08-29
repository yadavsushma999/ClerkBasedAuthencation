
# 🔐 Clerk + Password Auth + Prisma – Next.js App

A full-featured authentication system using **Clerk** (email/password + OTP), **Next.js (App Router)**, **TypeScript**, and **Prisma ORM** to manage custom user data in your own database.

---

## ✨ Features

- 🔐 **Email + Password Authentication** (via Clerk)
- 📱 **OTP Login** via Email/SMS (optional with Clerk)
- 💾 **Prisma ORM** with synced `User` table
- ⚙️ Built on **Next.js App Router**
- 🧱 Fully typed with **TypeScript**
- 🔄 Auto-sync Clerk users into your DB
- ✅ Clerk middleware for protecting routes
- 📦 Clean folder structure, scalable setup
---

## 🛠 Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Clerk](https://clerk.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL / MySQL / SQLite] (Your choice)
- [Tailwind CSS](https://tailwindcss.com/) *(Optional)*
- [Sonner](https://sonner.emilkowal.dev/) *(for toast notifications)*

---

## 📁 Environment Variables:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL = /auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /auth/sign-up
DATABASE_URL=your-db-url

##Prisma Command
npx prisma generate
npx prisma migrate dev --name init
npx prisma db push
npx prisma studio


