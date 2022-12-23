import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { register } from "../redux/action/authAction";
const Register = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  const [role,setRole]=useState("user")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister=(e)=>{
    e.preventDefault();
    dispatch(register({name,email,pass,role},navigate("/login")));
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img  style={{width:'250px'}}   src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg"/>
      <Card
        className="text-center"
        border="info"
        style={{
          width: "30rem",
          margin:"2rem 2rem 2rem 0"
        }}
      >
        <Card.Header>creat account</Card.Header>
        <Card.Body>
          <Form>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) =>setName(e.target.value)}
            value={name}
            
          />
        </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Pass"
                onChange={(e) =>setPass(e.target.value)}
                value={pass}
                
              />
            </Form.Group>

            <Button
              style={{
                width: "15rem",
              }}
              variant="success"
             onClick={handleRegister} 
            >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;