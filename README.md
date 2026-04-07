# 🎬 MyTube

> A YouTube-inspired frontend application built with **React**, **Redux Toolkit**, and **Tailwind CSS** — focused on performance, scalable state management, and clean UI/UX.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-764ABC?style=flat&logo=redux)](https://redux-toolkit.js.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat&logo=firebase)](https://firebase.google.com/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.0-38BDF8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

---

## 📌 Live Demo & Source

| | Link |
|---|---|
| 🌐 Live Demo | [Click here](#) |
| 💻 GitHub Repo | [Click here](#) |

---

## 📸 Screenshots

| Home | Live Chat |
|------|-----------|
| ![Home](./src/assets/HomePage.png) | ![LiveChat](./src/assets/LiveChat.png) |

| Login | Search Bar | Comments |
|-------|------------|----------|
| ![Login](./src/assets/LoginPage.png) | ![Search](./src/assets/SearchBar.png) | ![Comments](./src/assets/CommentsPage.png) |

---

## 🚀 Features

### ⚡ Debounced Search with Express Proxy & Redux Caching

A custom **Express.js server** proxies Google's autocomplete API to handle CORS, paired with **200ms debouncing** on the frontend and **Redux-based result caching** — so repeated queries never hit the server again.

**How debouncing works:**

| Keystroke Gap | Behaviour |
|---|---|
| < 200ms | API call skipped |
| ≥ 200ms | API call triggered |

**Performance impact:**

| Scenario | API Calls (per 1,000 users) |
|---|---|
| Without Debouncing | ~140,000 calls |
| With Debouncing | ~3,000 calls |

> ✅ **98% reduction** in API calls — significantly improves responsiveness and reduces server load.

---

### 💬 Live Chat (Real-Time Simulation)

Simulates YouTube-style live chat using **API polling every 500ms** via `setInterval`, dispatching messages into Redux state in real time.

- Users can type and send their own messages
- Mock messages auto-stream every 500ms
- Each message shows user name + avatar (first letter of name)
- Newest messages render at the top using `flex-col-reverse`
- Clean, scrollable chat window with live indicator

---

### 🔐 Firebase Authentication

Secure user authentication powered by **Firebase Auth**, with full session management via Redux.

- Sign Up with name, email & password
- Login with validation — invalid credentials are rejected
- After login, user's first initial renders as a styled avatar in the header
- Sign Out with dropdown menu
- User state persisted in Redux across the session

---

### 🗨️ N-Level Nested Comments (Reddit-Style)

Each video page renders a **recursively nested comment system** — unlimited depth, just like Reddit threads.

- Comments are nested under each video
- Supports N levels of reply depth
- Clean indentation to show thread hierarchy

---

### 📂 Sidebar Navigation

Persistent sidebar with toggle support, covering all major YouTube-like sections.

- Home, Shorts, Subscriptions, History, Watch Later, Your Videos
- Open/close toggle via hamburger menu
- Smooth responsive behaviour across screen sizes

---

### 🌙 Dark / Light Mode

Global theme toggle powered by a dedicated **Redux `ThemeSlice`** — applied consistently across every component.

- One-click toggle between Light and Dark mode
- Theme state managed globally via Redux
- All components respond to theme change instantly

---

### 🌐 Multi-Language Support

Language selector integrated in the header using a **Redux `configSlice`**.

- Switch UI language from a dropdown
- Language preference stored in Redux state
- Easily extendable with new languages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI Library |
| Redux Toolkit | Global State Management |
| Tailwind CSS | Styling |
| Firebase | Authentication |
| Express.js | Backend Proxy Server |
| Node.js | Server Runtime |
| Vite | Build Tool |
| React Router | Client-Side Routing |

---

## 📁 Project Structure

```
myTube/
├── src/
│   ├── components/        # All React components (Header, Sidebar, LiveChat, etc.)
│   ├── utils/             # Redux slices, Firebase config, helpers, constants
│   ├── images/            # Static assets
│   └── assets/            # Screenshots
├── server/
│   └── index.js           # Express proxy server
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/myTube.git
cd myTube

# Install dependencies
npm install
```

### Running the App

Both the frontend (Vite) and backend (Express) run concurrently with a single command:

```bash
npm run dev
```

> This uses **concurrently** to spin up both servers at once — frontend on `http://localhost:5173` and Express proxy on `http://localhost:3000`.

---

## 📌 Note

This project is built for **learning and demonstration purposes**, inspired by YouTube's UI/UX and core features. It is a frontend-focused application with a lightweight Express proxy — not a full-stack app with a database.

---

## 🧑‍💻 Author

**Aman Uniyal**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/aman-uniyal-1280b628b)
