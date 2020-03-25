const mongoose= require('mongoose');
const Schema = mongoose.Schema;

 const PersonSchema=new Schema({
    document:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    phone:{type:String,required:false,default:""}
});


module.exports= mongoose.model('Person', PersonSchema);