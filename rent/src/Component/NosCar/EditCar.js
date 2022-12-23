
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import { editecar } from '../../redux/action/carAction';


const EditCar = ({el}) => {


    const [show, setShow] = useState(false);
    const [image, setImage] = useState(el.image);
    const [marque, setMarque] = useState(el.marque);
    const [price, setPrice] = useState(el.price);
    const dispatch= useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleEdit = (e) => {
      e.preventDefault();
      dispatch(editecar(el._id, {image,marque,price }),handleClose())
       

    }

  return (
    
     <div className='New'>
    
    
    <Button variant="warning" onClick={handleShow} >
           Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> car edit</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    

    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
    <Form.Control
      placeholder="car image"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=> setImage(e.target.value)}
    />
  </InputGroup>
      
      
  
  <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1">Marque</InputGroup.Text>
  <Form.Control
    placeholder="car marque"
    aria-label="Username"
    aria-describedby="basic-addon1"
    onChange={(e)=>setMarque(e.target.value)}
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
/>
</InputGroup>

      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={handleEdit}>
          Save Changes
        </Button>
     
        </Modal.Footer>
        </Modal>
    
    </div>
  )
}

export default EditCar