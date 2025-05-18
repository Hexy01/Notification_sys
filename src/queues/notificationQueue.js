const amqplib = require('amqplib');

const queueName = 'notifications';

exports.publish = async (notification) => {
  const connection = await amqplib.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(notification)));
};
