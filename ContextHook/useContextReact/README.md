# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📘 React `useContext` Hook Guide

The `useContext` hook in React provides a way to share values like state, functions, or any other data across the component tree **without manually passing props at every level**.

---

## 🧠 What is `useContext`?

`useContext` is a React hook that lets you **consume context values** that have been provided at a higher level in the component tree.

```js
const value = useContext(MyContext);
```

This returns the current context value for MyContext, allowing your component to access shared state or functions.

### 📍 When to Use useContext

When you have global data that many components need (e.g., user auth info, theme, language settings).

To avoid "prop drilling" — passing props through multiple nested components.

When managing state or configuration that spans across the app.

### Step 1: Create a Context

```js
// UserContext.js
import React from "react";
export const UserContext = React.createContext();
```

### Step 2: Create a Context Provider

```jsx
// UserContextProvider.jsx
import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

### Step 3: Wrap Your App with the Provider

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./context/UserContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
```

### Step 4: Consume Context in a Component

```jsx
// Profile.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>{user ? `Hello, ${user.name}` : "You are not logged in."}</h2>
      <button onClick={() => setUser({ name: "Alice" })}>Login as Alice</button>
    </div>
  );
};

export default Profile;
```

## ✅ Benefits

- Reduces prop drilling
- Centralizes state logic
- Makes code cleaner and more maintainable
- Works out of the box with React (no extra libraries needed)
