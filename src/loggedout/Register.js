import React,  { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button , Form, Container, Card, InputGroup, Modal} from 'react-bootstrap'
import axios from 'axios';
import {useFormik} from 'formik'
import { basicSchema } from './schema';

export default function Register(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: 0,
      dateOfBirth: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const [matchingPasswords, setMatchingPasswords] = useState(true)

  // const firstNameInput = useRef();
  // const lastNameInput = useRef();
  // const ageInput = useRef();
  // const dateOfBirthInput = useRef();
  // const emailAddressInput = useRef();
  const passwordInput = useRef();
  const passwordConfirm = useRef();

  function handleSubmit(event){
      event.preventDefault();
      const data = {
        // firstname: firstNameInput.current.value,
        // lastname: lastNameInput.current.value,
        // age: ageInput.current.value,
        // dateOfBirth: dateOfBirthInput.current.value,
        // email: emailAddressInput.current.value,
        password: passwordInput.current.value,
      };
      if(passwordConfirm.current.value !== passwordInput.current.value){
        setMatchingPasswords(false)
        return;
      }
      console.log(data)
      axios.post("http://localhost:3000/register", data)
      .then(response => {
        console.log(response.data);
        handleClose()
      })
      .catch(error => {
        console.error(error);
      })
      console.log(data);
  }
  
    return (
        <div>
          <Form onSubmit={formik.handleSubmit}>
          <Button variant="primary" onClick={handleShow}>
          REGISTER
          </Button>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Container>
                <Card className="px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                        REGISTER
                      </h2>
                      <div className="mb-3">
                          <Form.Group className="mb-3" controlId="Firstname">
                            <Form.Label className="text-center">Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" id ="firstName" name ="firstName" onChange={formik.handleChange} value = {formik.values.firstName} />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="Lastname">
                            <Form.Label className="text-center">Lastname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" id ="lastName" name ="lastName" onChange={formik.handleChange} value = {formik.values.lastName}/>
                          </Form.Group>

                          <InputGroup className="mb-3">
                          <InputGroup.Text>Age</InputGroup.Text>
                          <Form.Control type="text" id ="age" name ="age" onChange={formik.handleChange} value = {formik.values.age}/>
                          </InputGroup>

                          <Form.Group className="mb-3">
                          <Form.Label className="text-center"> Date of birth </Form.Label>
                          <Form.Control type="date" id ="dateOfBirth" name ="dateOfBirth" onChange={formik.handleChange} value = {formik.values.dateOfBirth}/>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                              Email address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id ="email" name ="email" onChange={formik.handleChange} value = {formik.values.email}/>
                          </Form.Group>
    
                          <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordInput} />
                            <div className ="errorLogin">{matchingPasswords ? "": "passwords dont match"}</div>
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="confirmPassword"
                          >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref = {passwordConfirm} />
                            <div className ="errorLogin">{matchingPasswords ? "": "passwords dont match"}</div>
                          </Form.Group>

                      </div>
                    </div>
                  </Card.Body>
                </Card>
          </Container>

            </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={formik.handleSubmit}>
            Create Account
          </Button>
          </Modal.Footer>
          </Modal>
          </Form>
        </div>
      );
}