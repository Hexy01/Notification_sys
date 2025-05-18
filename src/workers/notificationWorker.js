const { connectRabbitMQ, getChannel } = require("../utils/rabbitmq");

async function startWorker() {
  await connectRabbitMQ();
  const channel = getChannel();

  channel.consume("notifications", (msg) => {
    const content = JSON.parse(msg.content.toString());
    console.log("📥 Received Notification:", content);

    // You can plug your email/SMS logic here.
    channel.ack(msg);
  });
}

startWorker();
