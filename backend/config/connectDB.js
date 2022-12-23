const mongoose = require("mongoose");


const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://samia:samia123@cluster0.eaq9ng2.mongodb.net/?retryWrites=true&w=majority");
      console.log(' data base is connected');
    } catch (error) {
         console.log('data base is not connected');

        
    }
};
module.exports= connectDB;