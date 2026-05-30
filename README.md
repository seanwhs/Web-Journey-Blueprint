# 🚀 Web Journey Blueprint

Welcome to the **Web Journey Blueprint**! This repository is your structured roadmap to mastering modern web development. We move from the fundamental building blocks of JavaScript to the robust, type-safe architecture of Next.js.

---

## 🏗️ The Curriculum: A Modular Build

We treat learning like construction. Each folder adds a new "floor" to your technical foundation:

| Folder | Name | Focus |
| --- | --- | --- |
| `/01-foundations-js` | Foundations | Mastering the materials (ES6+, Arrays, Objects) |
| `/02-react-basics` | React Basics | Mastering the structure (Components, Props, State) |
| `/03-typescript-intro` | TypeScript | Mastering the blueprints (Type-safety, Interfaces) |
| `/04-nextjs-fullstack` | Next.js | Mastering the systems (Routing, SSR, Server Actions) |
| `/05-capstone-project` | Capstone | Building your first complete, production-ready app |

---

## 📅 The "Two-Week Sprint" Plan

Don't spend months in "tutorial hell." Use this aggressive 14-day path to get hands-on experience:

* **Days 1–3: JavaScript Labs**
* Learn to manipulate data arrays with `.map()` and `.filter()`.
* Understand how to organize data with objects and destructuring.


* **Days 4–7: React Basics**
* Build "Lego-style" reusable components.
* Master `useState` to make your UI interactive and responsive.


* **Days 8–10: TypeScript Introduction**
* Add a "spellchecker" to your code.
* Define the "shape" of your data using `types` and `interfaces`.


* **Days 11–14: Next.js Full-Stack**
* Turn your React components into a live, server-rendered web application.
* Deploy a functional project that talks to a database using Server Actions.



---

## 🧪 Litmus Test: Are You Ready?

If you can read this snippet and identify the purpose of the **Type** definition and the **Map** function, you are ready to begin:

```typescript
// Defining the "shape" of our data
type Task = { id: number; title: string; completed: boolean };

// A component that displays a list of tasks
const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  );
};

```

---

## 🛠️ Getting Started

1. **Clone this repo** to your local machine.
2. **Ensure you have [Node.js](https://nodejs.org/) installed.**
3. **Start at `/01-foundations-js**`: Each folder contains a `README.md` with specific exercises and learning goals.

---

### How to use this repo

* **Branching:** Use `git checkout -b feature/exercise-name` to work on each lab.
* **Strict Mode:** Always keep `strict: true` in your `tsconfig.json` to get the most out of TypeScript.
* **Community:** If you get stuck, check the documentation links provided in each sub-folder.

**Ready to start?** Let me know if you'd like me to provide the exact terminal commands to scaffold your first project, or if you'd like to dive into the first JavaScript lab!
