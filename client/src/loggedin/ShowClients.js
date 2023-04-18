import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Table } from "react-bootstrap";
import { http } from "../config/httpExample";

export default function ShowClients() {
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/loggedin/showusers")
    //   .then((response) => {
    //     setClientsData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    http
      .get("/show")
      .then((response) => {
        console.log(response.data);
        setClientsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirm Password</th>
        </tr>
      </thead>
      <tbody>
        {clientsData.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.confirmPassword}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
