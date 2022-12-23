const express=require("express")
const { Addbookingcar, Getbookingcar, Deletebookigcar, Editbookingcar} = require("../controlles/bookingcar")


const bookingcarRoute = express.Router()
bookingcarRoute.post("/addbooking",Addbookingcar),
bookingcarRoute.get("/bookingcar",Getbookingcar),
bookingcarRoute.delete("/delete/:id",Deletebookigcar),
bookingcarRoute.put("/edit/:id",Editbookingcar),




module.exports=bookingcarRoute;