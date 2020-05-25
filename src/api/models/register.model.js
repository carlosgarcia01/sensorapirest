const mongoose = require('mongoose');

const { Schema } = mongoose;

const registerSchema = new Schema({
  document: { type: String, required: true },
  description: { type: String, required: false, default:""},
  registerDate: { type: String, required: false ,default:""},
});

module.exports = mongoose.model('register', registerSchema);
