import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";

export default function UpdateProfile() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("idToken")}`,
    "Refresh-Token": localStorage.getItem("refreshToken"),
  };

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    dateOfBirth: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(userData);
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/loggedin/update",
        userData,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Firstname">
        <Form.Label className="text-center">Firstname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="firstname"
          value={userData.firstname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Lastname">
        <Form.Label className="text-center">Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="lastname"
          value={userData.lastname}
          onChange={handleChange}
        />
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>Age</InputGroup.Text>
        <Form.Control
          type="text"
          name="age"
          value={userData.age}
          onChange={handleChange}
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label className="text-center"> Date of birth </Form.Label>
        <Form.Control
          type="date"
          name="dateOfBirth"
          value={userData.dateOfBirth}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-center">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className="delete">
        <Button variant="primary" type="submit">
          Update User
        </Button>
      </div>
    </Form>
  );
}
