const mongoose=require("mongoose");

const carSchema = new mongoose.Schema({

    image:{type:String, required:true},
    marque:{type:String , required:true},
    price:{type:Number , required:true},

});

module.exports=mongoose.model("car",carSchema)