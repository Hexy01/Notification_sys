const express = require("express");
const { connectRabbitMQ } = require("./utils/rabbitmq");
const { sendNotification } = require("./producers/sendNotification");

const app = express();
app.use(express.json());

app.post("/notifications", async (req, res) => {
  const { type, userId, message } = req.body;
  if (!type || !userId || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  await sendNotification({ type, userId, message });
  res.status(200).json({ status: "Notification sent to queue" });
});

connectRabbitMQ().then(() => {
  app.listen(3000, () => console.log("🚀 Server running on port 3000"));
});
