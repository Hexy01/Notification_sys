# 🔔 Notification Center

A full-stack **Notification Center** web application that allows users to send and view notifications. Built with **React.js** on the frontend and **Express.js** on the backend, it simulates a real-time notification system with a focus on simplicity and extendability.

---

## 📌 Features

- Post notifications (e.g., email, alert)
- View all stored notifications
- React-based responsive UI
- Clean and simple API
- In-memory storage (no database required)

---

## 🛠️ Tech Stack

| Layer      | Tech Used         |
|------------|-------------------|
| Frontend   | React + Vite      |
| Backend    | Node.js + Express |
| Styling    | CSS (custom/minimal) |
| Data Store | In-memory Array   |

---

## 📁 Project Structure

notification-center/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── App.jsx
│ ├── index.js
│ └── ...
├── server/ # Express backend
│ ├── index.js
│ └── ...
└── README.md

---


💡 Assumptions
-The backend does not use a database. Notifications are lost on server restart.
-No authentication is implemented.
-Frontend and backend are assumed to run on ports 3000 and 5000 respectively.
-CORS is enabled by default.



---

🚀 Future Improvements
-Use a persistent database like MongoDB or PostgreSQL
-Implement user authentication and roles
-Add WebSocket support for real-time updates
-Include timestamp and notification categories
-Mobile responsiveness and advanced styling


