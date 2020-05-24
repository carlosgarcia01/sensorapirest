/* eslint-disable prettier/prettier */
const PenaltyfeeService = require('../../services/penaltyfee.service');
const Penaltyfee = require('../models/penaltyfee.model');

module.exports={
  async getPenaltyfees(req, res, next) {
    const penaltyfees = await PenaltyfeeService.getAllPenaltyfee();

    return res.status(200).send({
      penaltyfees
    });

  },

  async getPenaltyfee(req, res, next) {
    const {
      id
    } = req.params;

    const penaltyfee = await PenaltyfeeService.getPenaltyfeeById(id);

    return res.status(200).send({
      penaltyfee
    });
  },

  async postPenaltyfee(req, res, next) {

    const penaltyfeeReceived = new Penaltyfee({
      price: req.body.price,
      date: req.body.date,
      vehicleplate: req.body.vehicleplate
    });


    const newPenaltyfee = await PenaltyfeeService.postPenaltyfee(penaltyfeeReceived);

    return res.status(200).send({
      newPenaltyfee
    });
  },


  async putPenaltyfee(req, res) {
    const {
      id
    } = req.params;
    const penaltyfeeReceived = req.body;

    const penaltyfeeUpdate = await PenaltyfeeService.putPenaltyfee(id, penaltyfeeReceived);

    return res.status(200).send({
      penaltyfeeUpdate
    });
  },

  async deletePenaltyfee(req, res) {
    const {
      id
    } = req.params;

    PenaltyfeeService.deletePenaltyfee(id);

    return res.status(200).send('Deleted Penalty fee');
  },
}
