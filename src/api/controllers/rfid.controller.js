const RfidService = require('../../services/rfid.service');
const Rfid = require('../models/rfid.model');

module.exports = {
  async getRfids(req, res, next) {
    const rfids = await RfidService.getAllStates();

    return res.status(200).send({ rfids });
  },

  async getRfid(req, res, next) {
    const { id } = req.params;

    const rfid = await RfidService.getRfidById(id);

    return res.status(200).send({ rfid });
  },

  async postRfid(req, res, next) {
    const rfidReceived = new Rfid({
      state: req.body.state,
    });

    const newRfid = await RfidService.postRfid(rfidReceived);

    return res.status(200).send({ newRfid });
  },

  async putRfid(req, res) {
    const { id } = req.params;
    const rfidReceived = req.body;

    rfidUpdated = await RfidService.putRfid(id, rfidReceived);

    return res.status(200).send({ rfidUpdated });
  },

  async deleteRfid(req, res) {
    const { id } = req.params;

    RfidService.deleteRfid(id);

    return res.status(200).send('Rfid deleted');
  },
};
