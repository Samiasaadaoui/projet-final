import React, { useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Addbookingcar, getbookingcar } from '../redux/action/bookingcarAction';
import Modal from 'react-bootstrap/Modal';



const BookingCar = ({el}) => {


   
  
  const [FirstName, setFristName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Telephone, setTelephone] = useState(0);
  const [DataToRent, setDataToRent] = useState(0);
  const [ReturnData, setReturnData] = useState(0);
  const [NumberOfDay, setNumberOfDay] = useState(0);
  const [PriceOfRent, setPriceOfRent] = useState(Number(el.price));
  const [Total, setTotal] = useState(0);
  


 const dispatch= useDispatch();
 const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getbookingcar())
  }, [])
  

  const handlebook=(e)=>{
    e.preventDefault()
    dispatch(Addbookingcar({FirstName,LastName,Address,Telephone,DataToRent,ReturnData,
      NumberOfDay,PriceOfRent,Total}) ,navigate,handleClose(),
      setFristName(""),
      setLastName(""),
      setAddress(""),
      setTelephone(0),
      setDataToRent(0),
      setReturnData(0),
      setNumberOfDay(0),
      setPriceOfRent(el.price),
      setTotal(0)
      )
  }

const totalprice=()=>{

   return setTotal(Number(NumberOfDay)*Number(PriceOfRent))
}
console.log(Total,PriceOfRent,NumberOfDay)

   return (
   
    <div >
    <Button  variant="success" onClick={handleShow}>
        BOOK 
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
    <div style={{color:'blue'}} className='tete'>
    <h1 > Reserver Maintenant </h1>
    <div   style={{color:'red'}} className='type'>
    <h2>{el.marque}</h2>
    <h3> prix{el.price} <span>dt</span></h3>
    </div >
    <div style={{color:'black'}}   className='index'>
    <p>Obtenez la meilleure expérience,
    planifiez vos voyages facilement et réservez rapidement.</p>
    </div>
    <img style={{with:'500px',height:'250px'}} src={el.image} alt="car"/>
    <div   className='detail'>
    <img  style={{with:'50px',height:'50px'}} src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_209/https://www.alvergnas.com/wp-content/uploads/2019/03/bv-manu-209x300.png" title="boite manuel && automatique" alt=" boite manuel"/>
    <img   style={{with:'50px',height:'50px'}}  src="https://images.prismic.io/ornikar/5660f2d5df6a206e399335ce5ea1070aa7a3a20b_portiere_coffre_ouvert.png?auto=compress,format" title="4 porte" alt="porte"/>
    <img   style={{with:'50px',height:'50px'}}  src="https://mon-guide-voiture.fr/wp-content/uploads/2019/07/mettre-la-clim2.png" title="climatiseur" alt="climatisseur"/>
    <img   style={{with:'50px',height:'50px'}}    src="https://img.myloview.fr/stickers/buse-de-pompe-a-essence-jaune-et-chute-isolee-icone-de-la-station-de-remplissage-de-gaz-400-106061782.jpg" title="essence" alt="essence"/>
    <img    style={{with:'50px',height:'50px'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvfezWiIZRN-u7Q1fJndH9v9QKNyPneGZmqUnIV8ipUBkKa1IjoHVJu6E9_Q9samW1BQ&usqp=CAU" title="5place" alt="place"/>
    </div>
    </div>
    
    <Card
      style={{
        margin: " 4rem auto ",
        width: "30rem",
      }}
    >
    <Card.Body>
    <form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>FirstName</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="enter your name"   onChange={(e)=>setFristName(e.target.value)}
    value={FirstName}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>LastName</Form.Label>
  <Form.Control 
  type="text" 
  placeholder="enter your name"  onChange={(e)=>setLastName(e.target.value)} 
  value={LastName}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Address</Form.Label>
<Form.Control 
type="text"
 placeholder="enter your address"  onChange={(e)=>setAddress(e.target.value)}
 value={Address}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Telephone</Form.Label>
<Form.Control
 type="Number" 
 placeholder="enter your telephone"   onChange={(e)=>setTelephone(e.target.value)}
 value={Telephone}/>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>DateToRent</Form.Label>
<Form.Control 
type="Date"
 placeholder="enter date"   onChange={(e)=>setDataToRent(e.target.value)}
 value={DataToRent}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>ReturnDate</Form.Label>
<Form.Control 
type="Date" 
placeholder="enter date return"   onChange={(e)=>setReturnData(e.target.value)}
value={ReturnData}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>NumberOfDay</Form.Label>
<Form.Control 
type="Number"
 placeholder="enter number" onChange={(e)=>setNumberOfDay(e.target.value)}
 value={NumberOfDay} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>PriceOfRent</Form.Label>
<Form.Control 
type="Number"
 placeholder="enter price" disabled value={PriceOfRent}  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label >Total :</Form.Label>
<input type='button' onClick={()=>totalprice()} placeholder='total' value={Total}/>
</Form.Group>
   
<Button variant="secondary" onClick={handleClose}>
Close
</Button>
<Button variant="primary" onClick={handlebook}>
Reserve 
</Button>

<div>
</div>

  </form>
  </Card.Body>
    </Card>
    </Modal.Body>
    </Modal>
    </div>
  )
}

export default BookingCar