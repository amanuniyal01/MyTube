# 🎬 MyTube

A modern YouTube-inspired web application built using **React, Redux, and Tailwind CSS**, focused on performance, scalability, and clean UI/UX.

---

## 🚀 Features

### ⚡ Debounced Search (Performance Optimized)

* Implements **debouncing (200ms)** to reduce unnecessary API calls.
* Improves performance significantly during fast typing.

#### 🔍 How it works:

* If time between keystrokes **< 200ms → API call is skipped**
* If time **≥ 200ms → API call is triggered**

#### 📊 Performance Comparison:

| Scenario           | API Calls (per 1000 users) |
| ------------------ | -------------------------- |
| Without Debouncing | ~140,000 calls             |
| With Debouncing    | ~3,000 calls               |

➡️ This reduces load and improves responsiveness across devices.

---

### 💬 Live Chat (Real-time Simulation)

* Built using **API polling every 500ms**
* Mimics real-time chat similar to YouTube live streams

#### Features:

* Users can send messages
* Messages are stored in **mock data store**
* Each message includes:

  * User name
  * Profile avatar (first letter in a circle)
  * Message content

---

### 🔐 Authentication (Firebase)

* Secure login system powered by **Firebase Authentication**
* Features:

  * Login with validation (no invalid credentials allowed)
  * Logout functionality
  * Persistent user session

#### 👤 User Experience:

* After login, user avatar appears in the UI
* Avatar shows **first letter of user's name in a styled circle**

---

### 📂 Sidebar Navigation

* Persistent sidebar across pages
* Includes sections like:

  * Home
  * History
  * Watch Later
  * Subscriptions
  * and more...

#### ✨ Functionality:

* Toggle (open/close) sidebar
* Responsive behavior based on user interaction

---

## 🛠 Tech Stack

* **React.js**
* **Redux Toolkit**
* **Tailwind CSS**
* **Firebase Authentication**
* **Vite**

---

## 📈 Key Highlights

* 🔥 Performance-focused architecture
* ⚡ Optimized API usage with debouncing
* 💬 Real-time UI simulation using polling
* 🎯 Clean and reusable component structure
* 📱 Responsive design

---

## 📸 Screenshots

*(Add your screenshots here for better impact)*

---

## 🧑‍💻 Author

**Aman Uniyal**
[LinkedIn](https://www.linkedin.com/in/aman-uniyal-1280b628b)

---

## ⭐ Future Improvements

* WebSocket-based real-time chat
* Dark mode support 🌙
* Video upload functionality
* Backend integration (Node.js + DB)

---

## 📌 Note

This project is built for learning and demonstration purposes, inspired by YouTube’s UI/UX and core features.

---
