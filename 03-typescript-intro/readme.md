# 🔷 Module 03 — TypeScript for React

# Turning Flexible Code into Reliable Systems

Welcome to **TypeScript for React**.

This is the module where your applications stop being just “working code” and start becoming **predictable systems**.

React gives you structure.

TypeScript gives you safety.

Together, they form the foundation of real-world frontend engineering.

---

# 🧠 Why TypeScript Exists in React

JavaScript is flexible — but that flexibility comes at a cost:

* props can be wrong
* API data can be inconsistent
* state shapes can drift over time
* components can silently break at runtime

TypeScript solves this by adding:

> a compile-time system that enforces structure before your code runs

Instead of discovering bugs in the browser, you catch them in the editor.

---

# 🎯 Learning Objectives

By the end of this module, you should understand:

* type annotations for variables
* typing React props
* typing state in `useState`
* interfaces vs type aliases
* union types for UI states
* generics in React hooks
* typing events and refs
* utility types (`Partial`, `Pick`, `Omit`)
* type narrowing
* safe API typing patterns

You do NOT need advanced TypeScript to be productive in React.

You only need the subset used in real applications.

---

# 🏗️ Folder Structure (Suggested)

```text id="ts-structure"
03-typescript-intro/
├── README.md
├── 01-basic-types/
├── 02-functions/
├── 03-objects-and-interfaces/
├── 04-unions-and-literals/
├── 05-react-props/
├── 06-react-state/
├── 07-events-and-refs/
├── 08-utility-types/
├── 09-api-typing/
├── 10-mini-project/
└── playground/
```

---

# ⚡ Core Mental Model

TypeScript answers one question:

> “What shape should this data have?”

React answers:

> “What should the UI look like?”

Together:

> “What shape of data produces what UI?”

---

# 1. Basic Types

TypeScript lets you define the shape of values.

---

## Primitive Types

```ts id="basic-types"
const name: string = "Sean";
const age: number = 30;
const isActive: boolean = true;
```

---

## Arrays

```ts id="array-types"
const numbers: number[] = [1, 2, 3];
const names: string[] = ["A", "B"];
```

---

## Why This Matters

React components depend on predictable data.

Types prevent invalid values from entering your UI.

---

# 2. Functions

Functions are everywhere in React.

---

## Typed Function

```ts id="typed-function"
function add(a: number, b: number): number {
  return a + b;
}
```

---

## Arrow Function

```ts id="arrow-function"
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

---

# Why This Matters

React components are functions.

Typing functions improves reliability and readability.

---

# 3. Objects and Interfaces

Most application data is object-shaped.

---

## Type Alias

```ts id="type-alias"
type User = {
  id: string;
  name: string;
};
```

---

## Interface

```ts id="interface"
interface User {
  id: string;
  name: string;
}
```

---

# Key Difference (Practical View)

* `interface` → extendable object models
* `type` → flexible compositions and unions

In React:

> both are used constantly — don’t overthink it early

---

# 4. Union Types (CRITICAL)

Union types define multiple allowed states.

---

## Example

```ts id="union-basic"
type Status = "idle" | "loading" | "error";
```

---

## Why This Is Powerful

Instead of:

```js
status = "something random"
```

You restrict values to:

* idle
* loading
* error

---

# Why React Uses This

UI is always state-driven:

* loading screen
* error screen
* success screen

Union types enforce valid UI states.

---

# 5. Literal Types

More precise than general types.

```ts id="literal-types"
type ButtonVariant = "primary" | "secondary";
```

---

# Why This Matters

Prevents invalid UI props:

```tsx
<Button variant="danger" /> // ❌ error
```

---

# 6. React Props Typing

This is the most important section in this module.

---

## Basic Props

```tsx id="props-basic"
type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};
```

---

# Why This Matters

Props are the API of components.

Typing them makes components:

* predictable
* reusable
* self-documenting

---

# 7. Typing State (`useState`)

---

## Primitive State

```tsx id="state-primitive"
const [count, setCount] = useState<number>(0);
```

---

## Object State

```tsx id="state-object"
type User = {
  id: string;
  name: string;
};

const [user, setUser] = useState<User | null>(null);
```

---

# Why This Matters

React state often starts as `null` or empty.

TypeScript ensures safe access.

---

# 8. Events (VERY IMPORTANT)

React events are strongly typed.

---

## Input Event

```tsx id="event-input"
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  console.log(e.target.value);
};
```

---

## Click Event

```tsx id="event-click"
const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  console.log("clicked");
};
```

---

# Why This Matters

Events are a major source of bugs in frontend apps.

Typing them prevents:

* invalid property access
* runtime crashes
* incorrect assumptions about DOM elements

---

# 9. Refs

Used for direct DOM access.

---

```tsx id="refs"
const inputRef = useRef<HTMLInputElement>(null);
```

---

# Why This Matters

TypeScript ensures:

* correct DOM element type
* safe property access
* proper null handling

---

# 10. Generics (READING FIRST, WRITING LATER)

Generics appear everywhere in React.

---

## Example

```ts id="generics"
const [user, setUser] = useState<User | null>(null);
```

---

## Promise Example

```ts id="promise-generic"
const fetchUsers = (): Promise<User[]> => {
  return fetch("/api/users").then(res => res.json());
};
```

---

# Key Idea

Generics = reusable type placeholders.

You don’t need to master them now.

You need to recognize them.

---

# 11. Type Narrowing

TypeScript becomes smarter based on conditions.

---

## Example

```ts id="narrowing"
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

---

## React Example

```tsx id="react-narrowing"
if (!user) return null;

return <div>{user.name}</div>;
```

---

# Why This Matters

React deals with:

* async data
* optional values
* conditional rendering

Narrowing makes this safe.

---

# 12. Utility Types

These are shortcuts for transforming types.

---

## Partial

```ts id="partial"
type PartialUser = Partial<User>;
```

---

## Pick

```ts id="pick"
type UserName = Pick<User, "name">;
```

---

## Omit

```ts id="omit"
type UserWithoutId = Omit<User, "id">;
```

---

# Why React Uses This

You often reuse types with small modifications:

* forms
* API responses
* component variants

---

# 13. Optional Properties

```ts id="optional"
type User = {
  id: string;
  name?: string;
};
```

---

# Why This Matters

Not all data arrives complete.

Optional fields match real API behavior.

---

# 🧪 Mini Labs

---

## Lab 01 — Typed Button System

Build:

* Button component
* Button variants
* typed props

Focus:

* unions
* props typing

---

## Lab 02 — Typed Todo App

Convert React todo app into TypeScript:

* Todo type
* state typing
* event typing

Focus:

* full React typing flow

---

## Lab 03 — API Typing

Fetch users and type response:

```ts
type User = {
  id: number;
  name: string;
};
```

Focus:

* async typing
* API safety

---

## Lab 04 — Form System

Build typed form:

* input events
* state validation
* submit handler

Focus:

* events
* narrowing
* object state

---

# 🧱 Mini Project — Typed Task Manager

Upgrade your React todo app into a TypeScript system.

---

## Features:

* add / remove tasks
* toggle completion
* filter tasks
* persist state (optional)
* fetch initial data

---

## Type Requirements:

* Task type
* Status union
* Props typing
* Event typing
* State typing

---

# ⚠️ Common Mistakes

---

## Ignoring Null Safety

❌

```ts
user.name
```

---

## Correct

```ts
user?.name
```

or

```ts
if (!user) return null;
```

---

## Overusing `any`

❌

```ts
const data: any;
```

Avoid unless absolutely necessary.

---

## Not Typing Props

❌

```tsx
const Button = (props) => {}
```

---

## Correct

```tsx
type Props = { text: string };

const Button = ({ text }: Props) => {}
```

---

# 🧠 TypeScript Mental Model

Think of TypeScript as:

> a contract between your components and your data

If the contract is violated:

* you get errors early
* before runtime
* in your editor

---

# 🎯 Completion Checklist

Before moving to Next.js, you should understand:

* [ ] basic types
* [ ] objects and interfaces
* [ ] union types
* [ ] props typing
* [ ] state typing
* [ ] event typing
* [ ] refs
* [ ] narrowing
* [ ] utility types
* [ ] optional properties

---

# 🚀 Next Module

Once comfortable, continue to:

```text id="next-module"
/04-nextjs-fullstack
```

You are now ready to move from **typed UI systems** to **full-stack React architecture**.
