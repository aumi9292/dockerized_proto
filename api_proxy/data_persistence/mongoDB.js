const mongoose = require('mongoose');
const KafkaMessage = require("./kafkaModel");

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const connectToMongo = (mongoUrl) => {
  mongoose.connect(mongoUrl, mongoOptions)
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(err));
};

const persistInMongo = (record) => {
  KafkaMessage.create(record)
    .catch(err => console.log(err));
};

module.exports = {
  connectToMongo,
  persistInMongo
};