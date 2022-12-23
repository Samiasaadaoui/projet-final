import React, { useState } from "react";

import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/authAction";



const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  const dispatch = useDispatch();
 const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(login({email,pass},navigate));
  }
  // console.log(email,pass)
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNXfJg15YqUbIUNXplMck1lMbyG-Znsghow&usqp=CAU" alt="404"/>
<div className="loginn">
  

<div className="card-container">
        <Card
          className="text-center"
          border="info"
          style={{
            width: "25rem",
            margin: " 4rem auto ",
            height: "20rem",
           
          }}
        >
        
    
        <span>
        <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Form>
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
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </Form.Group>

              <Button
                style={{
                  width: "20rem",
                }}
                variant="success"
                onClick={handleLogin}
                
              >
                Login
              </Button>
            </Form>
          </Card.Body>
          </span>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Login;