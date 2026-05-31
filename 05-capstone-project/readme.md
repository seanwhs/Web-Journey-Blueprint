# 🧱 Module 05 — Capstone Project

# From Learning Concepts → Building a Real System

Welcome to the final module of the **Web Journey Blueprint**.

This is where isolated concepts collapse into a single outcome:

> a **real, database-backed, full-stack Next.js application**

You are no longer practicing syntax.

You are building a system with persistence, server logic, and UI composition.

---

# 🧠 What This Module Really Is

This capstone is not a tutorial project.

It is a **compressed version of real production architecture**, simplified for learning.

You are working with:

* Next.js App Router
* Server Components
* Server Actions
* Prisma ORM
* SQLite database
* React UI components

Together, these form a real full-stack system.

---

# 🎯 Capstone Goal

Build a:

> **Production-Style Task Management System (Full-Stack)**

This is structurally similar to:

* Trello (task workflow)
* Linear (task state model)
* Notion (structured content system)
* Internal admin dashboards (CRUD-heavy systems)

---

# 🧩 Core Learning Outcome

By the end of this module, you should be able to:

* design full-stack Next.js applications using the App Router
* model real data using Prisma + TypeScript
* build server actions for mutations
* fetch data in Server Components
* separate UI vs server responsibilities cleanly
* implement CRUD flows (create + read at minimum here)
* understand database-driven UI rendering

---

# 🏗️ System Architecture Overview

This is the actual system you are building:

```text
Browser (User Interaction)
        ↓
Server Components (DashboardPage)
        ↓
Prisma Client (Database Query Layer)
        ↓
SQLite Database (Persistent Storage)
        ↓
Server Actions (Mutations via forms)
        ↓
UI Components (TaskCard / TaskForm)
```

---

# 📦 Project Structure (Real Implementation)

This matches your current codebase:

```text
app/
├── dashboard/
│   └── page.tsx
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   └── Navbar.tsx
├── lib/
│   ├── actions.ts
│   └── prisma.ts
├── types/
│   └── task.ts
└── prisma/
    └── schema.prisma
```

---

# 🧠 Core Data Model

Everything revolves around one entity:

> Task

---

## Prisma Schema (Source of Truth)

```prisma
model Task {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

---

## TypeScript Representation

```ts
export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};
```

### Important Insight

You are bridging:

> Database types (Prisma) → UI types (TypeScript)

This is real-world backend/frontend alignment.

---

# ⚛️ UI SYSTEM DESIGN

You are not building pages.

You are building **a component system over a data model**.

---

## 1. Dashboard Page (Server Component)

```tsx
import { prisma } from '../../lib/prisma';
import TaskCard from '../../components/TaskCard';
import TaskForm from '../../components/TaskForm';

export default async function DashboardPage() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main>
      <h1>Dashboard</h1>

      <TaskForm />

      <section>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={{
              ...task,
              createdAt: task.createdAt.toISOString()
            }}
          />
        ))}
      </section>
    </main>
  );
}
```

### What this teaches

* Server-side data fetching
* Database-driven rendering
* No client state required for initial load
* Data hydration into UI components

---

## 2. TaskCard (Pure UI Component)

```tsx
import { Task } from '../types/task';

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article>
      <h3>{task.title}</h3>

      <p>
        Status:{' '}
        {task.completed ? 'Completed' : 'Pending'}
      </p>
    </article>
  );
}
```

### Key Idea

This is a **pure presentation component**:

> input → render output

No state. No fetching. No side effects.

---

## 3. TaskForm (Server Action Form)

```tsx
import { createTask } from '../lib/actions';

export default function TaskForm() {
  return (
    <form action={createTask}>
      <input
        name="title"
        placeholder="Enter task"
      />

      <button type="submit">
        Create Task
      </button>
    </form>
  );
}
```

### Key Idea

This uses:

> Server Actions instead of API routes

Form submission directly triggers server mutation.

---

## 4. Server Action (Mutation Layer)

```ts
'use server';

import { prisma } from './prisma';

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string;

  await prisma.task.create({
    data: { title }
  });
}
```

### What this teaches

* server-side mutations
* direct database writes
* no REST boilerplate
* tight UI → server integration

---

## 5. Prisma Client (Database Layer)

```ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### Why this matters

This ensures:

* singleton Prisma instance
* no connection explosion in dev
* production-safe database access layer

---

## 6. Navbar (Routing Layer)

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
```

### Key Idea

Navigation is part of system architecture:

> UI + routing = application structure

---

# 🧠 What You Are Practicing Here

This capstone is training you to think in layers:

| Layer          | Responsibility        |
| -------------- | --------------------- |
| Prisma         | Data persistence      |
| Server Actions | Mutations             |
| Server Pages   | Data fetching         |
| Components     | UI rendering          |
| Types          | Data contracts        |
| Next.js Router | Application structure |

---

# ⚙️ Feature Requirements

## Core Features

### 1. Task Creation

* via server action form

### 2. Task Listing

* fetched from database
* server-rendered

### 3. Task Status Display

* completed vs pending

---

## Missing (Intentional for Learning)

This version intentionally does NOT include:

* delete
* update/toggle
* client state management

These are natural extensions.

---

# 🚀 Stretch Extensions

Once stable, extend the system:

## 1. Full CRUD

* update task
* delete task
* toggle completion

## 2. Client Interactions

* optimistic UI updates
* loading states

## 3. Filtering

* completed / pending filters

## 4. Database Upgrade

* Postgres via Prisma
* or Supabase

## 5. Auth Layer

* per-user tasks

---

# ⚠️ Common Mistakes

## ❌ Mixing concerns

Do NOT:

* fetch inside components randomly
* mix Prisma calls in UI components
* convert everything into client components

---

## ❌ Overusing `"use client"`

Only use client components for:

* interactivity
* form state
* event handling beyond forms

---

## ❌ Treating this as a CRUD tutorial

This is not CRUD practice.

It is:

> architecture training

---

# 🧠 Final Mental Model

At this point:

> React = UI layer
> Next.js = orchestration layer
> Prisma = data layer
> Server Actions = mutation layer

You are assembling a real system.

---

# 🧪 Final Challenge

You should be able to:

* explain every file in this project
* rebuild it from scratch without copying
* add missing CRUD features
* introduce new features without breaking structure

---

# 🎓 Completion Outcome

After completing this module:

You are no longer:

> “learning Next.js”

You are:

> building database-backed full-stack systems

---

# 🚀 Next Step

You move from:

> guided system building

to:

> independent system design

This is where real engineering starts.
