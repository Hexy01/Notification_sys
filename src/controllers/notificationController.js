const notificationService = require('../services/notificationService');

exports.sendNotification = async (req, res) => {
  try {
    const response = await notificationService.createNotification(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserNotifications = async (req, res) => {
  try {
    const userId = req.params.id;
    const notifications = await notificationService.getNotifications(userId);
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
