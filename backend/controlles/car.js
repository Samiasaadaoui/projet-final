const car = require("../modals/car")
exports.Addcar = async (req,res) => {
  try {
    const cars=new car(req.body);
    await cars.save();
    res.status(200).send({msg:"car added",cars});
  } catch (error) {
    res.status(500).send({msg:"couldn't add car"})
      }

};

exports.Getcar= async(req,res)=>{
  try{
    const cars= await car.find()
    res.status(200).send({msg:"list of cars",cars});
  }catch(error){
    res.status(500).send({msg:"couldn't get cars"})
  }
};


exports.Deletecar = async(req,res)=>{
  try {
    const cars= await car.findByIdAndDelete(req.params.id);
    res.status(200).send({msg:"car deleted"});
  } catch (error) {
    res.status(500).send({msg:"car was not deleted"})
    
  }
};

exports.Editcar=async(req,res)=>{
  try {
    const cars = await car.findByIdAndUpdate(req.params.id,{
      $set:{...req.body},
    },
    {new:true}
    );
    res.status(200).send({msg:"car updated", cars});
  } catch (error) {
    res.status(500).send({msg:"car couldn't be updated",cars})
    
  }
};


 
