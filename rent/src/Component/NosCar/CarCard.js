import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from "react-redux"
import { deletecar } from '../../redux/action/carAction';
import EditCar from "./EditCar"
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import BookingCar from '../BookingCar';



const CarCard = ({el}) => {
  const dispatch = useDispatch();
 
 
  const deletetest=()=>{
    dispatch(deletecar(el._id))
    
  }
  return (

    <div style={{ width: '18rem',margin:"50px" }} >
    <Card style={{ width: '18rem' }}>
    <Card.Img style={{width:"300px",height:"200px"}} variant="top" src={el.image} />
    <Card.Body>
      <Card.Title>{el.marque}</Card.Title>
      <Card.Text>
       price per day: {el.price}<span>DT</span>
      </Card.Text>
      <span style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <Button variant ="danger" onClick={deletetest}>DELETE</Button>
      <EditCar el={el} />
      <BookingCar el={el}/>
      </span>
       
    </Card.Body>
   </Card>
   </div>


  )
  }

export default CarCard