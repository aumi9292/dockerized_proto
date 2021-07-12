const axios = require('axios');
const { Kafka } = require('kafkajs');

require('dotenv').config();
const {CLIENT, BROKERS, FROM_BEGINNING, POST_URL, CONSUMER_GROUP, TOPIC} = process.env
// const myArgs = process.argv.slice(2);   // node consumer.js stocks stock_listener
// const [TOPIC, CONSUMER_GROUP] = myArgs

const kafka = new Kafka({
  clientId: CLIENT,
  brokers: BROKERS.split(" ")
});

const consumer = kafka.consumer({ groupId: CONSUMER_GROUP});

const postRecord = (data) => {
  // const record = {data, deserializedValue: String(data.message.value)};
  axios.post(`${POST_URL}/${TOPIC}`, {
    key: data.message.key.toString(),
    value: data.message.value.toString(),
    timestamp: new Date(Number(data.message.timestamp)),
  })
    .catch(error => console.log(error));
};

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC, fromBeginning: Boolean(FROM_BEGINNING) });

  await consumer.run({
    eachMessage: (data) => postRecord(data),
  });
}

startConsumer();