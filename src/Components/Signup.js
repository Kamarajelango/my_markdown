import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signup() {
  return <>
  <div className='row'>
    <div className='col'></div>
    <div className='col mt-5'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConformPassword">
        <Form.Label>Conform Password</Form.Label>
        <Form.Control type="password" placeholder="Conform password" />
      </Form.Group>
     
     <Link to='/login'>
     <Button variant="primary" type="submit">
       Signup
      </Button></Link>
     <Link to='/login'><button className='btn btn-primary mx-2'>Login</button></Link>  
    </Form>
    </div>
    <div className='col'></div>
  </div>      
  </>
}

export default Signup