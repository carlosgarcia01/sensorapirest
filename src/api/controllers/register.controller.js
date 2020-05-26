const RegisterService = require('../../services/register.service');
const Register = require('../models/register.model');

module.exports = {
  async getRegisters(req, res, next) {
    const registers = await RegisterService.getAllRegisters();

    return res.status(200).send({ registers });
  },

  async getRegister(req, res, next) {
    const { id } = req.params;

    const register = await RegisterService.getRegisterByDocument(id);

    return res.status(200).send({ register });
  },

  async postRegister(req, res, next) {
    const registerReceived = new Register({
      document: req.body.document,
      description: req.body.description,
      registerDate: req.body.registerDate,
    });

    const newRegister = await RegisterService.postRegsiter(registerReceived);

    return res.status(200).send({ newRegister });
  },

  async putRegister(req, res) {
    const { id } = req.params;
    const registerReceived = req.body;

    registerUpdated = await RegisterService.putRegister(id, registerReceived);

    return res.status(200).send({ registerUpdated });
  },

  async deleteRegister(req, res) {
    const { id } = req.params;

    RegisterService.deleteRegister(id);

    return res.status(200).send('Register deleted');
  },
};
