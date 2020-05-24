const mongoose = require('mongoose');

// eslint-disable-next-line import/newline-after-import
const Person = require('./person.model');
const { Schema } = mongoose;

const PenaltyfeeSchema = new Schema({
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now(), required: false },
  vehicleplate: { type: String, required: true },
  person: { type: Schema.Types.ObjectId, ref: Person, required: false },
});

module.exports = mongoose.model('Penaltyfee', PenaltyfeeSchema);
