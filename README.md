# 🔔 Notifications Center

A simple full-stack notification center built with **React** (frontend) and **Express** (backend). It allows users to post and view notifications.

---

## 🛠️ Tech Stack

| Layer      | Tech Used         |
|------------|-------------------|
| Frontend   | React + Vite      |
| Backend    | Node.js + Express |
| Styling    | CSS (custom/minimal) |
| Data Store | In-memory Array   |

---

## 📦 Features

- 📝 Post notifications via an API
- 📥 View notifications on a simple UI
- 🔄 Automatically fetch latest notifications
- ⚙️ Backend built using Express.js
- 🎨 Frontend built using React.js
- 🔓 CORS enabled to allow cross-origin requests
- 📁 Simple JSON-based in-memory data (no database)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 🔧 Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Git

---

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```
---


## 💡 Assumptions

-The backend does not use a database. Notifications are lost on server restart.
-No authentication is implemented.
-Frontend and backend are assumed to run on ports 3000 and 5000 respectively.
-CORS is enabled by default.



---

## 🚀 Future Improvements

-Use a persistent database like MongoDB or PostgreSQL
-Implement user authentication and roles
-Add WebSocket support for real-time updates
-Include timestamp and notification categories
-Mobile responsiveness and advanced styling


