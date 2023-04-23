import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { http } from "../config/httpExample";

export default function UpdateProfile() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("idToken")}`,
    "Refresh-Token": localStorage.getItem("refreshToken"),
  };

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(userData);
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/update",
        userData,
        { headers }
      );
      console.log(response.data);
      // http.put("/update", userData, { headers }).then((response) => {
      //   console.log(response.data);
      // });
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
        <Form.Control
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <PhoneInput
          country={"ch"}
          name="phone"
          value={userData.phone}
          onChange={(phone) =>
            handleChange({ target: { name: "phone", value: phone } })
          }
        />
      </Form.Group>

      <div className="delete">
        <Button variant="primary" type="submit">
          Update User
        </Button>
      </div>
    </Form>
  );
}
