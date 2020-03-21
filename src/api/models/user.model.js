const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const UserSchema = new Schema({
    document:{type:String,require:true,unique:true},
    name:{type:String,require:true},
    lastname:{type:String,require:true},
    contact:{type:String,require:true},
    occupation:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    avatar: String,
    signUpdate: { type: Date, default: Date.now(),required: false },
    lastLogin: Date,
});

UserSchema.pre("save",function (next)  {
    var user = this;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err)
      bcrypt.hash(this.password, salt, null, (err, hash) => {
        if (err) return next(err)
        this.password = hash
        next()
      })
    })
  })
  
  UserSchema.methods.gravatar = function (size) {
    if(!size){
        size = 200;
    }
    if(!this.email) return `https://gravatar.com/avatar/?s=2005d=retro`
  
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=2005d=retro`
  }
  
  UserSchema.methods.comparePassword = function (candidatePassword, cb)
   {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch)
    });
  }

module.exports=mongoose.model('User',UserSchema);

