import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { del_user, get_current } from '../redux/action/authAction';



const Profile = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    useEffect(() => {
      dispatch(get_current())
     }, [])
    const user = useSelector((state) => state.authReducer.contact);
    const handledel=()=>{
        dispatch(del_user(user._id,navigate))
    }
    console.log(user)
  return (
    <div>
   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mJsJYDWb3UV79eBnSn_yPvbyIPmTNvTN7LDrD1j8oJ4VSmhDYCMZajhW-byXIcrWZkI&usqp=CAU" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
          {user.email}
      </Card.Text>
      <Button variant="danger" onClick={handledel}>DELETE</Button>
     
    </Card.Body>
  </Card></div>
  )
}

export default Profile