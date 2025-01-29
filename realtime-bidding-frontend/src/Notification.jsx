// Notifications.tsx
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function Notifications({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on(`notification_${userId}`, (data) => {
      setNotifications((prev) => [data.message, ...prev]);
    });

    return () => {
      socket.off(`notification_${userId}`);
    };
  }, [userId]);

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg">
      {notifications.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
}

export default Notifications;
