
import './App.css';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from'./privateRoute/privateRoute';
import CarListe from './Component/NosCar/CarListe';
import Login from './Component/Login';
import Register from './Component/Register';
import BookingCar from './Component/BookingCar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getbookingcar } from './redux/action/bookingcarAction';
import Alerterror from './Component/Alerterror';
import Admin from './Component/Admin/Admin';
import Profile from './Component/Profile';







function App() {
  const[search,setSearch]=useState("");
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(getbookingcar())
  }, [])
  
  const booking=useSelector((state)=>state.bookingcarReducer.bookings)
console.log(booking)
return (
    <div className="App">
    <Navigation setSearch={setSearch} search={search}/>
    <Alerterror/>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path = '/login' element={<Login/>}/>
    <Route path='/register' element = {<Register/>}/>
    <Route path = '/profile' element={<Profile/>}/>
     <Route path='/admin' element={<Admin/>}/>
    
     <Route path='/profile'element = {<PrivateRoute> <Profile></Profile></PrivateRoute>}/>
    
  
     
    <Route path='/car' element={<CarListe search={search}/> }/>
  
    <Route path ='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    
  
     
    </div>
  );
}

export default App;
