const amqp = require("amqplib");

let channel = null;

async function connectRabbitMQ() {
  const connection = await amqp.connect("amqp://localhost");
  channel = await connection.createChannel();
  await channel.assertQueue("notifications");
  console.log("✅ RabbitMQ connected & queue ready!");
}

function getChannel() {
  return channel;
}

module.exports = { connectRabbitMQ, getChannel };
