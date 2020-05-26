const mongoose = require('mongoose');

const { Schema } = mongoose;
const rfidSchema = new Schema({
  state: { type: String, required: true,default:"0" },
});

module.exports = mongoose.model('rfid', rfidSchema);
