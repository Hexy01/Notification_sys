const { getChannel } = require("../utils/rabbitmq");

async function sendNotification(message) {
  const channel = getChannel();
  if (!channel) {
    throw new Error("RabbitMQ channel not established.");
  }

  channel.sendToQueue("notifications", Buffer.from(JSON.stringify(message)));
  console.log("📨 Sent to queue:", message);
}

module.exports = { sendNotification };
