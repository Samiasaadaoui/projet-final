const express =require("express");
const { Register, Login, Deletecontact, Editcontact } = require("../controlles/contact");
const { isAuth } = require("../middlewear/isAuth");
const { registervalidation, validation, loginvalidation } = require("../middlewear/validation");
const contactRoute = express.Router();


contactRoute.post("/register",registervalidation, validation,Register);
contactRoute.post("/login",loginvalidation,validation,Login);
contactRoute.get("/current",isAuth,(req,res)=>{
    res.send({contact: req.user});

});
contactRoute.delete("/dele/:id",Deletecontact)
contactRoute.put("/put/:id",Editcontact)


module.exports = contactRoute;
