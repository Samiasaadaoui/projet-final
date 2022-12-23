import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector}from "react-redux";
import CarCard from './CarCard';
import { getcar } from '../../redux/action/carAction';

const CarListe = ({search}) => {
  const dispatch = useDispatch();
  console.log("search",search)
  
  useEffect(()=>{
    dispatch(getcar());
  }, []);
  const car = useSelector((state) => state.carReducer.cars);
  console.log(car)
  return (

    <div style={{color :'blue'}} className='catygory' >
    <h2> Location Voiture en Tunisie </h2>
    
    <div  className='voiture' style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around",alignItems:"center"}} >
   {car.filter((el)=>el.marque.toLowerCase().includes(search)).map((el)=><CarCard key={el._id} el={el}/>)}
     </div>
     </div>
    
  
  )
}

export default CarListe