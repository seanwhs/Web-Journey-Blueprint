# ⚛️ Module 02 — React Fundamentals

# From JavaScript Patterns to UI Systems

Welcome to **React Fundamentals**, the module where JavaScript stops being abstract and becomes visual, interactive, and system-driven.

This is the point where everything from Module 01 becomes real:

* arrays become UI lists
* objects become component state
* functions become components
* events become user interactions
* async data becomes rendered screens

React is not a new language.

It is a **rendering system built on JavaScript patterns you already learned**.

---

# 🧠 What React Actually Is

React is a **UI rendering engine based on state changes**.

It answers one question:

> “Given this state, what should the UI look like?”

You don’t manually update the DOM.

You describe what the UI should be.

React handles the rest.

---

# 🎯 Learning Objectives

By the end of this module, you should understand:

* components as functions
* JSX as UI syntax
* props and data flow
* state (`useState`)
* events and handlers
* conditional rendering
* list rendering (`map`)
* component composition
* rendering cycles (mental model)
* basic hooks (`useState`, `useEffect`)

---

# 🏗️ React Mental Model (Critical)

If you understand nothing else, understand this:

> React re-renders the entire component when state changes.

Not the whole page.

Just the component tree affected by state.

---

## Flow of React

```text
State changes
   ↓
Component re-runs
   ↓
JSX re-evaluates
   ↓
Virtual DOM compares changes
   ↓
Real DOM updates efficiently
```

You are not “updating UI”.

You are **re-running functions that describe UI**.

---

# 📦 Folder Structure (Suggested)

```text id="react-structure"
02-react-basics/
├── README.md
├── 01-components/
├── 02-jsx/
├── 03-props/
├── 04-state/
├── 05-events/
├── 06-conditional-rendering/
├── 07-lists/
├── 08-composition/
├── 09-use-effect/
├── 10-mini-project/
└── playground/
```

---

# 1. Components — Functions That Return UI

A React component is just a function.

```tsx id="component-basic"
function Button() {
  return <button>Click me</button>;
}
```

---

## Arrow Function Style (Modern Standard)

```tsx id="component-arrow"
const Button = () => {
  return <button>Click me</button>;
};
```

---

## Key Idea

A component is:

> A function that returns JSX (UI description)

---

# Why This Matters

Instead of writing DOM manipulation:

```js
document.createElement(...)
```

You write:

```tsx
return <button />
```

You describe UI instead of constructing it.

---

# 2. JSX — JavaScript + HTML Hybrid

JSX is not HTML.

It is syntax that compiles to JavaScript.

---

## Basic JSX

```tsx id="jsx-basic"
const element = <h1>Hello World</h1>;
```

---

## JSX Rules

### Must return a single root

```tsx
return (
  <div>
    <h1>Hello</h1>
  </div>
);
```

---

### Use `className` instead of `class`

```tsx id="jsx-class"
<div className="container" />
```

---

### Use `{}` for JavaScript

```tsx id="jsx-expressions"
const name = "Sean";

return <h1>Hello {name}</h1>;
```

---

# Why JSX Exists

JSX allows you to:

* mix logic and UI
* embed JavaScript expressions
* build dynamic interfaces efficiently

---

# 3. Props — Passing Data Into Components

Props are how components communicate.

---

## Basic Props

```tsx id="props-basic"
const Greeting = (props) => {
  return <h1>Hello {props.name}</h1>;
};
```

---

## Destructured Props (Preferred)

```tsx id="props-destructure"
const Greeting = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
```

---

## Usage

```tsx id="props-usage"
<Greeting name="Sean" />
```

---

# Why Props Matter

Props enable:

* reusability
* modular UI design
* component composition

Without props, React would not scale.

---

# 4. State — The Heart of React

State is **data that changes over time**.

---

## useState Hook

```tsx id="state-basic"
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
```

---

## Key Concept

When state changes:

> React re-runs the component function.

---

# Why State Matters

State drives:

* UI updates
* interactivity
* animations
* form handling
* dynamic rendering

---

# 5. Events — User Interaction

React handles events using camelCase.

---

## Click Event

```tsx id="event-click"
<button onClick={() => console.log("clicked")}>
  Click
</button>
```

---

## Named Handler

```tsx id="event-handler"
const handleClick = () => {
  console.log("clicked");
};

<button onClick={handleClick} />
```

---

# Why Events Matter

Events connect:

> user actions → state changes → UI updates

This is the React loop.

---

# 6. Conditional Rendering

Render different UI based on state.

---

## Ternary Operator

```tsx id="conditional-basic"
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

---

## Logical AND

```tsx id="conditional-and"
{
  isLoading && <Spinner />
}
```

---

# Why This Matters

React UI is always conditional:

* loading vs loaded
* logged in vs logged out
* empty vs filled
* success vs error

---

# 7. Rendering Lists (MOST IMPORTANT)

This is where JavaScript meets UI.

---

## Basic List Rendering

```tsx id="list-basic"
const items = ["A", "B", "C"];

return (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```

---

## Real Data Example

```tsx id="list-real"
const users = [
  { id: 1, name: "Sean" },
  { id: 2, name: "Alex" }
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);
```

---

# Why Keys Matter

Keys help React:

* identify elements
* optimize re-renders
* track list changes

---

# 8. Component Composition

Components inside components.

---

## Example

```tsx id="composition"
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};
```

```tsx id="composition-usage"
<Card>
  <h1>Title</h1>
  <p>Content</p>
</Card>
```

---

# Why Composition Matters

Instead of inheritance, React uses composition:

* flexible UI building
* reusable layouts
* scalable design systems

---

# 9. useEffect — Side Effects

Used for anything outside rendering:

* fetching data
* subscriptions
* timers
* logging

---

## Basic Example

```tsx id="useeffect-basic"
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

## Fetch Example

```tsx id="useeffect-fetch"
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

# Why useEffect Matters

React rendering is pure.

Side effects must be separated from rendering logic.

---

# ⚠️ Common Beginner Mistakes

---

## Mutating State

❌ Wrong:

```tsx
count = count + 1;
```

---

## Correct Way

```tsx
setCount(count + 1);
```

---

## Forgetting Keys

❌ Wrong:

```tsx
items.map(item => <li>{item}</li>)
```

---

## Correct Way

```tsx
items.map(item => (
  <li key={item.id}>{item}</li>
));
```

---

## Putting Logic Outside Components

React logic belongs inside components or hooks.

---

# 🧪 Mini Labs

---

## Lab 01 — Counter App

Build:

* increment button
* decrement button
* reset button

Focus:

* useState
* events
* rendering

---

## Lab 02 — Todo List

Build:

* add todo
* remove todo
* mark complete
* filter todos

Focus:

* arrays
* map
* state updates
* immutable updates

---

## Lab 03 — User List

Fetch users from API and display them.

Focus:

* useEffect
* async data
* rendering lists

---

## Lab 04 — Component Builder

Build reusable components:

* Button
* Card
* Input
* List

Focus:

* props
* composition

---

# 🧱 Mini Project — Interactive Dashboard

Build a small React dashboard:

### Features:

* counter widgets
* user list
* todo system
* loading states
* conditional UI

### Requirements:

Use:

* components
* props
* state
* effects
* lists
* conditional rendering

---

# 📌 React Thinking Model

Always think in this loop:

```text
User action
   ↓
State change
   ↓
Component re-renders
   ↓
UI updates
```

---

# 🧠 Key Insight

React is not about DOM manipulation.

It is about:

> synchronizing UI with state over time

---

# 🚀 Next Module

Once comfortable with React fundamentals:

```text
/03-typescript-intro
```

You will now add safety, structure, and scalability to everything you just built.
