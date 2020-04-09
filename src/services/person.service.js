'use strict'
const mongoose = require('mongoose');
const Person = require('../api/models/person.model');




module.exports = {
    async getAllPerson() {
  
       const person = await Person.find();
      
     
      return person;
  
  
    },
  
  
  
    async getPersonByDocument(id) {
  
      const person = await Person.find({"document": id});
      return person;
    },
  
    async postPerson(personReq) {
      const newPerson = await personReq.save();
      return newPerson;
    },
  
    async putPerson(id, personReq) {
   
      
      var newPerson = await Person.findByIdAndUpdate(id, personReq);
  
        return newPerson;
    },

    async deletePerson(id) {
      await Person.findByIdAndDelete(id);
    },
}  