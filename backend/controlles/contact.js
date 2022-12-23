const contact = require("../modals/contact");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  const { name,email, pass } = req.body;
  try {
    const found = await contact.findOne({ email });
    if (found) {
      res.status(400).send({ errors: [{ msg: "user already exists" }] });
    }
    const contacts = new contact(req.body);
    //bcrypt
    const salt = 10;
    const hashpassword = bcrypt.hashSync(pass, salt);
    contacts.pass = hashpassword;
    //jwt
    const payload = { id: contacts._id };
    const token = jwt.sign(payload, process.env.secretKey);
    await contacts.save();
    res.status(200).send({ msg: "contact added", contacts, token });
  } catch (error) {
    res.status(500).send("contact was not added");
  }
};
exports.Login = async (req, res) => {
  // const { email, pass, id } = req.body;
  // try {
  //   const contacts = await contact.findOne({ email });
  //   if (!contacts) {
  //     res.status(400).send({ errors: [{ msg: "bad credentials" }] });
  //   }
  //   const match = await bcrypt.compare(pass, contacts.pass);
  //   if (!match) {
  //     return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
  //   }
  //   //jwt
  //   const payload = { id: contacts._id };
  //   const token = jwt.sign(payload, process.env.secretKey);
  //   res.status(200).send({ msg: "logged in ", contacts, token });
  // } catch (error) {
  //   res.status(500).send("couldn't loggin");
  // }
  const { email, pass, id } = req.body;
  try {
    const contacts = await contact.findOne({ email });
    if (!contacts) {
      res.status(400).send({ errors: [{ msg: "user doesn't existe" }] });
    }
    const match = await bcrypt.compare(pass, contacts.pass);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }
    //jwt
    const payload = { id: contacts._id };
    const token = jwt.sign(payload, process.env.secretKey);
    res.status(200).send({ msg: "logged in ", contacts, token });
  } catch (error) {
   
  }
};




exports.Deletecontact = async(req,res)=>{
    try {
     await contact.findByIdAndDelete(req.params.id);
      res.status(200).send({msg:"contact deleted"});
    } catch (error) {
      res.status(500).send(error)
      
    }
  };


  
  exports.Editcontact=async(req,res)=>{
    try {
      const contacts = await contact.findByIdAndUpdate(req.params.id,{
        $set:{...req.body},
      },
      {new:true}
      );
      res.status(200).send({msg:"contact updated", contacts});
    } catch (error) {
      res.status(500).send({msg:"contact couldn't be updated",contacts})
      
    }
  };

