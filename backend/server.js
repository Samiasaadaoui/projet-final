const express=require("express");
const connectDB = require("./config/connectDB");
const carRoute = require("./routes/car");
const contactRoute=require("./routes/contact");
const bookingcarRoute=require("./routes/bookingcar");
const app=express()
require("dotenv").config()
const Port = process.env.port;
const nodemailer =require("nodemailer");
let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    port:587,
    host:"smtp.gmail.com",
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    },
    tls:{
        rejectUnauthorized:false,
    }
});
const nodmail = async(req, res, next) => {
    var name = req.body.values.name
    var email = req.body.values.email
    var message = req.body.values.message
    let html = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Acme Web Design</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
    <link rel="stylesheet" href="public/css/style.css">
  </head>
  <body>
    <div class="container">
    <h1>${name}</h1>
      <p> FROM : ${email}</p>
      <div class="wrapper animated bounceInLeft">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGxtdj4Bc_qBd8kdjxadwya3haECY0yziTw4H5m3QdEOEUMdj8_lp7KLmymfWdD2v5mE&usqp=CAU" alt="Trulli" width="500" height="333">
        <p> ${message}</p>
    </div>
  </body>
  </html>`
    
  
    var mail = {
      from: req.body.Email,
      to: "samiagomycode@gmail.com",
      text: message,
      html:html
    }
  
    mailTransporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  }

app.use(express.json());
connectDB();
app.use("/api/bookingcar",bookingcarRoute)
app.use("/api/contact", contactRoute)
app.use("/api/car", carRoute)
app.post('/api/mail',nodmail)

app.listen(Port,console.log(`app is runnig on port ${Port}`));