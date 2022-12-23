import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link , useNavigate} from 'react-router-dom';
import AddCar from './NosCar/AddCar';

import { useDispatch } from 'react-redux';
import { logout } from '../redux/action/authAction';




const Navigation = ({search,setSearch}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    
<div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand> <img style={{width:'90px',height:"90px"}}  src ='https://static1.bigstockphoto.com/8/9/2/large2/298132126.jpg' alt='log'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{display:"flex", flexwrap:'wrap'}}  className="me-auto">
        
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/car"> Car</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
            </Nav>
            
            <Form className="d-flex">
            <Form.Control
              
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {!token && (
            <div>
            <Nav className = "connexion" >
            <Nav.Link as={Link} to="/login" >login</Nav.Link>
            <Nav.Link as={Link} to="/register" >Register</Nav.Link>
            </Nav>
            </div>
          )}
            
            {token && (
              <div>
              <Nav className = "connexion" >
              <Nav.Link as={Link} to="/profile" >profile</Nav.Link>
              <Nav.Link
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                LOGOUT
              </Nav.Link>
              </Nav>
              </div>
            )}

          
          <AddCar/>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default Navigation