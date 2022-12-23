const bookingcar = require("../modals/bookingcar");


exports.Addbookingcar = async (req,res) => {
  try {
    const bookingcars=new bookingcar(req.body);
    await bookingcars.save();
    
    res.status(200).send({msg:"bookingcar added",bookingcars});
  } catch (error) {
    res.status(500).send({msg:"couldn't add bookingcar"})
      }

};

exports.Getbookingcar= async(req,res)=>{
  try{
    const bookingcars= await bookingcar.find()
    res.status(200).send({msg:"list of bookingcars",bookingcars});
  }catch(error){
    res.status(500).send({msg:"couldn't get bookingcars"})
  }
};


exports.Deletebookigcar = async(req,res)=>{
  try {
     await bookingcar.findByIdAndDelete(req.params.id);
    res.status(200).send({msg:"bookingcar deleted"});
  } catch (error) {
    res.status(500).send({msg:"bookingcar was not deleted"})
    
  }
};

exports.Editbookingcar=async(req,res)=>{
  try {
    const bookingcars = await bookingcar.findByIdAndUpdate(req.params.id,{
      $set:{...req.body},
    },
    {new:true}
    );
    res.status(200).send({msg:"bookingcar updated", bookingcars});
  } catch (error) {
    res.status(500).send({msg:"bookingcar couldn't be updated",bookingcars})
    
  }
};


 
