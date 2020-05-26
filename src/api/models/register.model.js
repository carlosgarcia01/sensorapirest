const mongoose = require('mongoose');

const { Schema } = mongoose;
var date = new Date();
var fecha = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()
const registerSchema = new Schema({
  document: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  registerDate: { type: String, required: false, default: fecha },
});

module.exports = mongoose.model('register', registerSchema);
