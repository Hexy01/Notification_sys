import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

function App() {
  const [notifications, setNotifications] = useState([]);
  const userId = 'user123';

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notifications/${userId}`)
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));

    socket.on(`notify-${userId}`, (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 border border-purple-200">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          🔔 Notifications Center
        </h1>

        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center">No notifications yet 🚫</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((n) => (
              <li
                key={n._id}
                className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 border-purple-400 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200"
              >
                <div className="font-semibold text-purple-900 text-lg">{n.title}</div>
                <div className="text-sm text-gray-700">{n.message}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
