# 🗄️ Prisma Demo

A hands-on demo project showcasing **Prisma ORM** with Node.js — covering database modeling, migrations, and CRUD operations with a clean, type-safe approach.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Prisma Commands Cheatsheet](#prisma-commands-cheatsheet)
- [Author](#author)

---

## 📖 About the Project

This project is a **learning/demo application** built to understand and demonstrate the core features of **Prisma ORM**:

- Defining data models using the Prisma Schema Language
- Running migrations to keep the database in sync
- Using **Prisma Client** for type-safe database queries
- Exploring data via **Prisma Studio**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Prisma ORM** | Database toolkit & ORM |
| **PostgreSQL / SQLite** | Database |
| **TypeScript / JavaScript** | Application language |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running database instance (PostgreSQL / SQLite etc.)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NIKITAA20/prisma-demo.git

# 2. Navigate into the project
cd prisma-demo

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root of the project:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

> 💡 If you're using **SQLite** for local development, use:
> ```env
> DATABASE_URL="file:./dev.db"
> ```

---

## 🗃️ Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations (creates tables in your database)
npx prisma migrate dev --name init

# (Optional) Seed the database with initial data
npx prisma db seed
```

---

## ▶️ Running the Project

```bash
# Run the main script
node index.js

# OR if using TypeScript
npx ts-node src/index.ts
```

### Open Prisma Studio (Visual Database Explorer)

```bash
npx prisma studio
```

> Opens a GUI at `http://localhost:5555` to view and manage your data.

---

## 📁 Project Structure

```
prisma-demo/
├── prisma/
│   ├── schema.prisma       # Database schema & models
│   ├── migrations/         # Auto-generated migration files
│   └── seed.ts / seed.js   # (Optional) Database seeder
├── src/
│   └── index.ts / index.js # Main application entry point
├── .env                    # Environment variables (not committed)
├── .env.example            # Example env file
├── package.json
└── README.md
```

---

## ⚡ Prisma Commands Cheatsheet

| Command | Description |
|---|---|
| `npx prisma init` | Initialize Prisma in a project |
| `npx prisma generate` | Generate Prisma Client from schema |
| `npx prisma migrate dev` | Create & apply a new migration |
| `npx prisma migrate reset` | Reset the database (⚠️ deletes all data) |
| `npx prisma db push` | Push schema changes without migrations |
| `npx prisma studio` | Open the visual database explorer |
| `npx prisma db seed` | Run the seed script |
| `npx prisma format` | Format the schema file |

---

## 👤 Author

**Nikita**  
GitHub: [@NIKITAA20](https://github.com/NIKITAA20)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
