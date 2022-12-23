const express = require("express")
const { Addcar,Getcar, Deletecar, Editcar } = require("../controlles/car")

const carRoute = express.Router()

carRoute.post("/add",Addcar)
carRoute.get("/cars",Getcar);
carRoute.delete("/del/:id",Deletecar);
carRoute.put("/edit/:id",Editcar);


module.exports = carRoute;

