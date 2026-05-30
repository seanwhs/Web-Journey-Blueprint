# ▲ Module 04 — Next.js Full-Stack Architecture

# From UI Components to Production Systems

Welcome to the point where React stops being “frontend” and becomes a **full-stack application runtime**.

Next.js is not just a React framework.

It is a **system for building production-grade web applications with integrated frontend + backend + data access layers**.

If React taught you how to build UI, Next.js teaches you how to build **applications**.

---

# 🧠 The Core Shift

With React alone:

> UI lives in the browser

With Next.js:

> UI + data + backend logic can live in the same system

This changes everything about how you think:

* rendering becomes server-aware
* components can fetch data directly
* APIs live inside the same repo
* routing becomes file-based
* performance becomes architectural, not accidental

---

# 🎯 Learning Objectives

By the end of this module, you should understand:

* App Router architecture
* Server vs Client Components
* file-based routing
* data fetching patterns (server-first)
* Server Actions
* Route Handlers (API routes)
* layout composition system
* metadata & SEO system
* environment variables
* full-stack data flow

You are not just learning features.

You are learning how modern full-stack React applications are structured in production.

---

# 🏗️ Folder Structure (App Router)

```text id="next-structure"
04-nextjs-fullstack/
├── README.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── loading.tsx
│   └── api/
│       └── users/
│           └── route.ts
├── components/
├── lib/
├── server/
├── types/
└── env/
```

---

# ⚡ The Next.js Mental Model

Next.js introduces a key idea:

> Rendering happens in multiple environments

---

## Three Execution Contexts

### 1. Server (Node.js / Edge)

* database access
* authentication
* API calls
* Server Components
* Server Actions

---

### 2. Client (Browser)

* interactivity
* events
* state (`useState`)
* DOM interactions

---

### 3. Build Time

* static generation
* pre-rendering
* metadata resolution

---

# 🧠 Core Concept: Server-First Thinking

Next.js flips React thinking:

Instead of:

> “Fetch data in the browser”

You now think:

> “Fetch data on the server, render HTML first”

---

# 1. File-Based Routing

In Next.js, folders = routes.

---

## Basic Route

```text id="route-basic"
app/page.tsx → "/"
```

```tsx id="home-page"
export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

## Nested Route

```text id="route-nested"
app/dashboard/page.tsx → "/dashboard"
```

---

## Layouts

```tsx id="layout"
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Navbar</nav>
      {children}
    </div>
  );
}
```

---

# Why This Matters

Routing becomes:

> filesystem-driven architecture instead of configuration-driven routing

---

# 2. Server Components (DEFAULT)

By default, components in Next.js App Router are Server Components.

---

## Example

```tsx id="server-component"
export default async function Page() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((u: any) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

---

# Why This Matters

You can:

* fetch data directly in components
* avoid client-side loading waterfalls
* reduce bundle size
* improve performance

---

# 3. Client Components

To use interactivity, you explicitly opt in:

```tsx id="client-component"
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

# Key Rule

> Server by default. Client only when needed.

---

# Why This Matters

This is one of the biggest architectural shifts in modern React:

* fewer client bundles
* faster initial load
* clearer separation of concerns

---

# 4. Data Fetching (Server-First Pattern)

---

## Direct Fetch in Server Component

```tsx id="fetch-server"
export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((u: any) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

---

# Why This Matters

You no longer need:

* `useEffect` for initial data
* loading state boilerplate (in many cases)
* client-side fetch orchestration

---

# 5. Route Handlers (API Layer)

Next.js lets you create backend endpoints inside the same project.

---

## GET Endpoint

```ts id="route-handler"
export async function GET() {
  return Response.json({ message: "Hello API" });
}
```

---

## With Request

```ts id="route-handler-request"
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({ ok: true });
}
```

---

# Why This Matters

You now have:

> frontend + backend in a single codebase

---

# 6. Server Actions (Modern Full-Stack Pattern)

Server Actions allow direct server mutations from components.

---

## Example

```tsx id="server-action"
async function createTodo(formData: FormData) {
  "use server";

  const text = formData.get("text");
  console.log(text);
}
```

---

## Usage

```tsx id="server-action-form"
<form action={createTodo}>
  <input name="text" />
  <button type="submit">Add</button>
</form>
```

---

# Why This Matters

You can:

* avoid API boilerplate
* reduce client-server complexity
* simplify form handling

---

# 7. Metadata API (SEO System)

---

```tsx id="metadata"
export const metadata = {
  title: "Dashboard",
  description: "User dashboard page"
};
```

---

# Why This Matters

Next.js integrates SEO into application structure:

* titles
* descriptions
* social previews
* structured metadata

---

# 8. Loading & Error UI

---

## Loading State

```tsx id="loading"
export default function Loading() {
  return <p>Loading...</p>;
}
```

---

## Error Boundary

```tsx id="error"
"use client";

export default function Error() {
  return <p>Something went wrong</p>;
}
```

---

# Why This Matters

UI states become file-based, not manual logic.

---

# 9. Environment Variables

---

```text id="env"
.env.local
```

```bash id="env-var"
DATABASE_URL=postgres://...
```

---

## Usage

```ts id="env-usage"
process.env.DATABASE_URL;
```

---

# Why This Matters

Environment separation is critical for:

* security
* deployment
* configuration management

---

# 10. Full-Stack Data Flow Model

Next.js applications follow this flow:

```text id="flow"
Request
  ↓
Server Component
  ↓
Data Fetch (DB/API)
  ↓
Render HTML
  ↓
Client Hydration (if needed)
  ↓
User Interaction
  ↓
Server Action / API Route
```

---

# 🧪 Mini Labs

---

## Lab 01 — Server-Rendered User List

Build:

* `/users` page
* fetch users from API
* render server-side

Focus:

* Server Components
* fetch

---

## Lab 02 — Client Counter Island

Build:

* interactive counter component
* embed inside server page

Focus:

* "use client"
* state isolation

---

## Lab 03 — Route Handler API

Build:

* `/api/todos`
* GET returns list

Focus:

* backend logic

---

## Lab 04 — Server Action Form

Build:

* form that submits to server
* logs or stores data

Focus:

* server mutations

---

# 🧱 Mini Project — Full-Stack Task Manager

Build a complete Next.js application:

---

## Features:

* server-rendered task list
* add tasks via server action
* delete tasks via API route
* loading states
* route-based pages
* simple dashboard layout

---

## Architecture Requirements:

* Server Components for data
* Client Components for interactivity
* Route Handlers for API layer
* Server Actions for mutations
* typed data models (optional extension)

---

# ⚠️ Common Mistakes

---

## Using useEffect for Everything

❌

```tsx
useEffect(() => {
  fetch(...)
}, []);
```

---

## Correct (Server Component)

```tsx
export default async function Page() {
  const data = await fetch(...);
}
```

---

## Overusing Client Components

❌ Marking everything `"use client"`

---

## Correct

Only use client components when:

* state is required
* events are required
* browser APIs are required

---

## Mixing Server/Client Improperly

Avoid putting server logic inside client components.

---

# 🧠 Mental Model Shift

Think of Next.js like this:

> React = UI system
> Next.js = full application runtime

---

# 🎯 Completion Checklist

Before moving to the capstone:

* [ ] understand server vs client components
* [ ] understand file-based routing
* [ ] can fetch data server-side
* [ ] can build API routes
* [ ] can use server actions
* [ ] understand layouts
* [ ] understand metadata
* [ ] understand loading/error UI

---

# 🚀 Next Module

You are now ready for:

```text id="capstone"
/05-capstone-project
```

This is where everything becomes a **real production-grade application system**.
