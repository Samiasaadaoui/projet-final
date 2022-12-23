import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import axios from 'axios'
import Swal from 'sweetalert2'
const Contact = () => {

  const[name, setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const values={name,email,message}
  console.log(values);
  const handlSend=()=>{
    axios.post('/mail',{
      values
    }).then((res)=>{
      if(res.data.status==="success"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Email has been sended',
          showConfirmButton: false,
          timer: 3000
        })
      }
    })
  }

  return (
    <div >
    <div  className='contact mb-5'>
    <div  className='contact'>
    <div  style={{color:'blue' , marginLeft:'550px'}} className='col-12'>
        <h1> Contact Us</h1>
    
    </div>
    </div>
    

    <div style={{margin:"85px"}} className='test'>
    <div  className='ro' style={{display:"flex"}}>
         <div className='col-md 5'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGxtdj4Bc_qBd8kdjxadwya3haECY0yziTw4H5m3QdEOEUMdj8_lp7KLmymfWdD2v5mE&usqp=CAU' alt='Contact us'/>
         <p style={{width:"450px"}}>
     N'hésitez pas à contacter notre service clientèle pour tous renseignements ou pour toutes questions relative à la location automobile. rent a car agence de location de voitures, est à votre entière disposition tous les jours de 8h00 à 20h00.
     Notre mission : mettre en œuvre tout ce qui est possible pour votre satisfaction. Vous pouvez nous joindre par courrier, par téléphone ou compléter le formulaire qui suit. En vous adressant à une agence de location reconnue, vous êtes assuré de bénéficier d'un service de location de voiture discount et de qualité.
          </p>
     </div>
     <Card
     style={{
       margin: " 4rem auto ",
       width: "30rem",
     }}
    
   >
   <Card.Body>
   <CardHeader style={{color:'black'}} className='contact'> <strong>Nous Contact</strong></CardHeader>
    <form>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="enter your name"  onChange={(e)=>setName(e.target.value)}
    value={name}/>
  </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}
     value={email}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3}  type="message"
    placeholder="yourmessage" />
  </Form.Group>

    
  <Button variant="primary"  value="send message"   onClick={()=>handlSend()}>
    Send Message
  </Button>
  </Form>
  </form>
  </Card.Body>
    </Card>
     </div>


     <div  style={{displyer:'flex',flexwrap:'wrap'}}  className='question'>
     <div>
    
  
    </div>
    <iframe width=" 1350px" height="350px" id="gmap_canvas" src="https://maps.google.com/maps?q=2034%20ezzahra%20tunis&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
     </div>
    </div>
    </div>
    </div>
   
  )
}

export default Contact