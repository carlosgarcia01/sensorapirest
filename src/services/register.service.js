'use strict'
const mongoose = require('mongoose');
const Register = require('../api/models/register.model');




module.exports = {
    async getAllRegisters() {
  
       const registers = await Register.find();
      
     
      return registers;
  
  
    },
  
  
  
    async getRegisterByDocument(id) {
  
      const register = await Register.find({"document": id});
      return register;
    },
  
    async postRegsiter(registerReq) {
      const newRegister = await registerReq.save();
      return newRegister;
    },
  
    async putRegister(id, registerReq) {
   
      
      var newRegister = await Register.findByIdAndUpdate(id, registerReq);
  
        return newRegister;
    },

    async deleteRegister(id) {
      await Register.findByIdAndDelete(id);
    },
}  