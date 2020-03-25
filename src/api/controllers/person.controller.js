const PersonService= require('../../services/person.service');
const Person= require('../models/person.model');



module.exports={
    async getPeople(req, res, next) 
  {
    const person = await PersonService.getAllPerson();
    return res.status(200).send({ person });
    
  },

  async getPerson(req, res, next)
   {
    const { id } = req.params;

    const person = await PersonService.getPersonById(id);

    return res.status(200).send({ person });
  },

  async postPerson(req,res,next)
  {
    
    let personReceived = new Person({
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        phone: req.body.phone
    });


    const newPerson = await PersonService.postPerson(personReceived);

    return res.status(200).send({ newPerson });
  },
  

      async putPerson(req,res)
      {
        const {id}=req.params;
        let personReceived = req.body;
        personUpdate= await PersonService.putPerson(id,personReceived);

        return res.status(200).send({personUpdate});
      },

      async deletePerson(req,res)
      {
        const { id } = req.params;
        PersonService.deletePerson(id);
        return res.status(200).send('Deleted Person');
      },
}