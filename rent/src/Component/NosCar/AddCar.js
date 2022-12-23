
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addcar } from '../../redux/action/carAction';



const AddCar = () => {
    
    const [show, setShow] = useState(false);
    const [image, setImage] = useState("");
    const [marque, setMarque] = useState("");
    const [price, setPrice] = useState(0);
   const dispatch= useDispatch();
   const navigate = useNavigate();
   
   



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = (e) => {
    e.preventDefault();
    dispatch(addcar( {image,marque,price }),navigate("/car"),handleClose(),
    setImage(""),
    setMarque(""),
    setPrice(""),
    
    
    )
      


    }
  
  return (
    <div className='New'>
    
    
        <Button variant="danger" onClick={handleShow} style={{borderRadius:'50%'}}>
     Add car
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          

           <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
        <Form.Control
          placeholder="car image"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=> setImage(e.target.value)}
          value={image}
        />
      </InputGroup>
          
          

      
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Marque</InputGroup.Text>
      <Form.Control
        placeholder="car marque"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e)=>setMarque(e.target.value)}
        value={marque}
      />
    </InputGroup>


    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
    <Form.Control
      placeholder="car price"
      aria-label="Username"
      aria-describedby="basic-addon1"
      type='number'
      onChange={(e)=>setPrice(e.target.value)}
      value={price}
    />
  </InputGroup>

          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

    
    </div>
  )
}

export default AddCar