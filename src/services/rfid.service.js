const Rfid = require('../api/models/rfid.model');

module.exports = {
  async getAllStates() {
    const states = await Rfid.find();

    return states;
  },

  async getRfidById(id) {
    const state = await Rfid.findById(id);

    return state;
  },

  async postRfid(rfidReq) {
    const newRfid = await rfidReq.save();

    return newRfid;
  },

  async putRfid(id, rfidReq) {
    const newRfid = await Rfid.findByIdAndUpdate(id, rfidReq);

    return newRfid;
  },

  async deleteRfid(id) {
    await Rfid.findByIdAndDelete(id);
  },
};
