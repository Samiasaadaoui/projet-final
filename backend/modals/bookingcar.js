const mongoose = require("mongoose");
const BookingCarShema= new mongoose.Schema({

    FirstName:{type:String, required:true},
    LastName :{type: String, required:true},
    Address :{type: String, required: true},
    Telephone:{type:Number,required:true},
    DataToRent:{type:Date,required:true},
    ReturnData:{type:Date,required:true},
    NumberOfDay:{type:Number,required:true},
    PriceOfRent:{type: Number,required:true},
    Total:{type:Number,required:true},


})
module.exports=mongoose.model("booking",BookingCarShema)