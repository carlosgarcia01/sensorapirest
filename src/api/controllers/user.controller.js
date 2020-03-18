const UserService = require('../../services/user.service');
const User = require('../models/user.model');
const path = require('path');
module.exports = {
  async getUsers(req, res, next) 
  {
    const users = await UserService.getAllUsuarios();
      
    return res.status(200).send({ users });
    
  },

  async getUser(req, res, next)
   {
    const { id } = req.params;

    const user = await UserService.getUsuarioById(id);

    return res.status(200).send({ user });
  },

  async postUser(req,res,next)
  {

    let userReceived = new User({
      document:req.body.document,
      name :req.body.name,
      lastname :req.body.lastname,
      contact :req.body.contact,
      occupation :req.body.occupation,
      email :req.body.email,
      password :req.body.password,
      avatar:req.body.avatar,
      signUpdate:req.body.signUpdate,
      lastLogin:req.body.lastLogin,
    })
 

    const newUser = await UserService.postUsuario(userReceived);

    return res.status(200).send({ newUser });
  },
  

      async putUser(req,res)
      {
        const {id}=req.params;
        let userReceived = req.body;
        userUpdate= await UserService.putUsuario(id,userReceived);

        return res.status(200).send({userUpdate});
      },

      async deleteUser(req,res)
      {
        const { id } = req.params;
        UserService.deleteUsuario(id);
        return res.status(200).send('Deleted user');
      },

      async signUp (req, res) {
        let user = new User({
            document:req.body.document,
            name :req.body.name,
            lastname :req.body.lastname,
            contact :req.body.contact,
            occupation :req.body.occupation,
            email :req.body.email,
            password :req.body.password,
            avatar:req.body.avatar,
            signUpdate:req.body.signUpdate,
            lastLogin:req.body.lastLogin,
        })
      //acá invoco el gravatar antes de que grabe el usuario
        user.avatar = user.gravatar();
        user.save(async err => {
          if(err) return res.status(500).send({ message: 
            `Error al crear el usuario: ${err}`})
          let generatedToken = await UserService.createToken(user) 
    
          return res.status(200).send({ token: generatedToken})
        })
      },
      async signIn (req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
             if (err) return res.status(500).send({ message: 
               `Error al ingresar: ${err}` })
             if (!user) return res.status(404).send({ message: 
               `No existe el usuario: ${req.body.email}` })
            
             return user.comparePassword(req.body.password,
              async  (err, isMatch) => {
               if (err) return res.status(500).send(
                 { message: `Error al ingresar: ${err}` })
               if (!isMatch) return res.status(404).send(
                 { message: `Error de contraseña: ${req.body.email}` })
         
               //req.user = user
               let generatedToken = await UserService.createToken(user)
               return res.status(200).send({ message: 
                 'Te has logueado correctamente', 
                 token: generatedToken})
             });      
           }).select('_id email password');
       },


};
