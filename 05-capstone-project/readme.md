# 🧱 Module 05 — Capstone Project

# From Learning Concepts → Building a Real System

Welcome to the final module of the **Web Journey Blueprint**.

This is where everything you’ve learned stops being isolated exercises and becomes a **complete production-style application**.

You are no longer learning syntax.

You are building a system.

---

# 🧠 What This Module Really Is

This capstone is not “one more tutorial project.”

It is a **compression of real-world frontend architecture** into a guided build.

You will combine:

* JavaScript fundamentals
* React component architecture
* TypeScript safety
* Next.js full-stack patterns

into a single cohesive application.

---

# 🎯 Capstone Goal

Build a:

> **Production-Style Full-Stack Task Management System**

Think of it as a simplified version of:

* Notion (structure)
* Trello (tasks)
* Linear (workflow concepts)
* internal admin dashboards (real-world pattern)

---

# 🧩 Core Learning Outcome

By the end of this module, you should be able to:

* design a React component system from scratch
* structure a Next.js full-stack application
* model real-world data using TypeScript
* separate server/client responsibilities correctly
* build API routes and server actions
* handle async data flows cleanly
* deploy a working application confidently

---

# 🏗️ System Architecture Overview

This is what you're building:

```text id="capstone-architecture"
User Interaction (Browser)
        ↓
Client Components (React UI)
        ↓
Server Actions / API Routes
        ↓
Server Components (Rendering Layer)
        ↓
Data Layer (In-memory / DB / Mock API)
```

---

# 📦 Suggested Project Structure

```text id="capstone-structure"
05-capstone-project/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   ├── tasks/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── api/
│       └── tasks/route.ts
│
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   ├── Button.tsx
│   └── Layout.tsx
│
├── lib/
│   ├── tasks.ts
│   ├── db.ts (mock or real)
│   └── utils.ts
│
├── types/
│   └── task.ts
│
└── server/
    └── actions.ts
```

---

# 🧠 Core Data Model

Everything revolves around one concept:

> A Task

---

## Task Type (Foundation)

```ts id="task-type"
export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: string;
};
```

---

# Why This Matters

This single model teaches:

* union types (`TaskStatus`)
* optional fields
* structured data modeling
* real-world API shape thinking

---

# ⚛️ UI SYSTEM DESIGN

You are building a component system, not just pages.

---

## 1. TaskCard Component

Represents a single task.

```tsx id="task-card"
import { Task } from "@/types/task";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskCard = ({ task, onToggle, onDelete }: Props) => {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <button onClick={() => onToggle(task.id)}>
        Toggle
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};
```

---

## 2. TaskList Component

```tsx id="task-list"
import { Task } from "@/types/task";
import { TaskCard } from "./TaskCard";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskList = ({
  tasks,
  onToggle,
  onDelete
}: Props) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
```

---

## 3. TaskForm Component

```tsx id="task-form"
"use client";

import { useState } from "react";

type Props = {
  onCreate: (title: string) => void;
};

export const TaskForm = ({ onCreate }: Props) => {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(title);
        setTitle("");
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />

      <button type="submit">Add</button>
    </form>
  );
};
```

---

# 🔌 Server Layer (Next.js Power Core)

---

## Server Action (Create Task)

```ts id="server-action-create"
"use server";

import { Task } from "@/types/task";

let tasks: Task[] = [];

export async function createTask(title: string) {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    status: "todo",
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

  return newTask;
}
```

---

## Why This Matters

You are now working with:

* server state
* in-memory persistence (upgradeable to DB)
* mutation logic outside UI

---

# 🌐 API Route Layer

---

```ts id="api-route"
import { NextRequest } from "next/server";

export async function GET() {
  return Response.json({ message: "tasks API" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return Response.json({ received: body });
}
```

---

# 🧠 Page Composition (Server Component)

---

```tsx id="page"
import { TaskList } from "@/components/TaskList";
import { TaskForm } from "@/components/TaskForm";
import { createTask } from "@/server/actions";

export default async function Page() {
  const tasks = []; // replace with DB or server state

  return (
    <div>
      <h1>Task Dashboard</h1>

      <TaskForm onCreate={createTask} />

      <TaskList
        tasks={tasks}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}
```

---

# 🧠 What You Are Practicing Here

This is the real learning outcome:

### You are separating concerns:

| Layer             | Responsibility  |
| ----------------- | --------------- |
| UI Components     | Rendering       |
| Client Components | Interactivity   |
| Server Actions    | Mutations       |
| API Routes        | External access |
| Types             | Structure       |
| Pages             | Composition     |

---

# ⚙️ Feature Requirements (Capstone Scope)

---

## Core Features

### 1. Task Management

* create task
* delete task
* toggle status

---

### 2. Filtering System

* all tasks
* todo
* in-progress
* done

---

### 3. UI States

* loading
* empty state
* error state

---

### 4. Component System

* reusable TaskCard
* reusable Button
* reusable Form

---

### 5. Server Integration

Choose one:

* in-memory store (beginner)
* JSON file persistence
* database (advanced stretch)

---

# 🚀 Stretch Goals (Optional)

If you want to push further:

---

## 1. Authentication Layer

* simple login mock
* user-specific tasks

---

## 2. Persistence Upgrade

* Prisma + SQLite
* or Supabase

---

## 3. Optimistic UI

* instant UI updates before server confirmation

---

## 4. Advanced Filtering

* search tasks
* date filtering

---

## 5. UI Polish

* animations
* transitions
* loading skeletons

---

# ⚠️ Common Capstone Mistakes

---

## Mixing Everything Together

❌ UI + server logic + state all in one file

---

## Correct Approach

Separate:

* components/
* server/
* lib/
* types/

---

## Overusing Client Components

Only use `"use client"` when needed.

---

## Ignoring Types

Capstone is where TypeScript becomes critical.

---

# 🧠 Final Mental Model

At this stage, you should think like this:

> React = UI system
> TypeScript = structure system
> Next.js = full-stack orchestration system

Together:

> You are building software systems, not pages

---

# 🧪 Final Challenge

Before finishing the course, you should be able to:

* rebuild this project from scratch
* explain every folder’s purpose
* separate client/server logic correctly
* design a new feature without breaking architecture

---

# 🎓 Completion Outcome

If you complete this capstone properly, you are no longer:

> “learning React”

You are:

> building production-grade frontend systems

---

# 🚀 What’s Next

From here, you move into real-world engineering:

* system design
* performance optimization
* architecture patterns
* scaling frontend applications
* integrating real databases and auth systems

---

# 🏁 Final Note

The goal was never to memorize syntax.

The goal was to build intuition for systems.

If you can build this capstone without confusion, you are already operating at a real-world frontend engineering level.
