const mongoose= require('mongoose');
const Schema = mongoose.Schema;

 const PenaltyfeeSchema=new Schema({
    price:{type: Number,required:true},
    date:{type:Date,default: Date.now(),required:false},
    vehicleplate:{type:String,required:true},
});


module.exports= mongoose.model('Penaltyfee', PenaltyfeeSchema);