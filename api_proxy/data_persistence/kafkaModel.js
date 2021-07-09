const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KafkaSchema = new Schema({
  topic: String,
  partition: Number,
  value: String,
  message: Object
});

const Message = mongoose.model('Message', KafkaSchema);

module.exports = Message;