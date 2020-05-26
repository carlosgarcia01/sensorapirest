const mongoose = require('mongoose');

const { Schema } = mongoose;

const registerSchema = new Schema({
  document: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  registerDate: { type: String, required: false, default: Date.now().toString() },
});

module.exports = mongoose.model('register', registerSchema);
