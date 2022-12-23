const mongoose=require("mongoose");


const contactSchema = new mongoose.Schema({
    name: {type: String},
    email:{type: String, required:true, unique: true},
    pass:{type : String , required : true},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
});

module.exports=mongoose.model("contact",contactSchema)