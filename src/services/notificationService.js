const Notification = require('../models/Notification');
const notificationQueue = require('../queues/notificationQueue');

exports.createNotification = async (data) => {
  const notif = await Notification.create(data);
  await notificationQueue.publish(notif); // Send to RabbitMQ
  return { message: 'Notification queued', id: notif._id };
};

exports.getNotifications = async (userId) => {
  return await Notification.find({ userId }).sort({ createdAt: -1 });
};
