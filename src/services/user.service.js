'use strict'
const mongoose = require('mongoose');
const User = require('../api/models/user.model');
const jwt = require('../utils/jwt')
const moment = require('moment');
const bcrypt = require('bcrypt')
const {
  JWT
} = require('../config');


module.exports = {
  async getAllUsers() {

     const users = await User.find();
    
   
    return users;


  },



  async getUserById(id) {

    const user = await User.findById(id);
    return user;
  },

  async postUser(userreq) {
    const newUser = await userreq.save();
    return newUser;
  },

  async putUser(id, userreq) {
 
    
    var newuser = await User.findByIdAndUpdate(id, userreq);

    if(userreq.password){
      bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(userreq.password, salt, null,async(err, hash) => {
          userreq.password = hash
          newUser=await User.findByIdAndUpdate(id, userreq)
          
        })
      });
    }
      return newuser;
  },



  async deleteUser(id) {
    await User.findByIdAndDelete(id);
  },

  async createToken(user) {
    const payload = {
      sub: user._id,
      iat: moment().unix()
      // exp:  moment().add(accessTokenExpiryTime/60/60/24,'days').unix()            
    }
    return await jwt.generateToken(payload, payload)
  },

  async decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
      try {
        const payload = jwt.getDecodedToken(token)

        if (payload.exp <= moment().unix()) {
          reject({
            status: 401,
            message: 'El token ha expirado'
          })
        }
        resolve(payload.sub)
      } catch (err) {
        reject({
          status: 500,
          message: 'Token no válido'
        })
      }
    })

    return decoded
  }
}
