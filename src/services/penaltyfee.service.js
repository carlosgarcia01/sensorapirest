'use strict'
const mongoose = require('mongoose');
const Penaltyfee = require('../api/models/penaltyfee.model');




module.exports = {
    async getAllPenaltyfee() {
  
       const penaltyfee = await Penaltyfee.find();
      
     
      return penaltyfee;
  
  
    },
  
  
  
    async getPenaltyfeeById(id) {
  
      const penaltyfee = await Penaltyfee.findById(id);
      return penaltyfee;
    },
  
    async postPenaltyfee(penaltyfeeReq) {
      const newPenaltyfee = await penaltyfeeReq.save();
      return newPenaltyfee;
    },
  
    async putPenaltyfee(id, penaltyfeeReq) {
   
      
      var newPenaltyfee = await Penaltyfee.findByIdAndUpdate(id, penaltyfeeReq);
  
        return newPenaltyfee;
    },

    async deletePenaltyfee(id) {
      await Penaltyfee.findByIdAndDelete(id);
    },
}  