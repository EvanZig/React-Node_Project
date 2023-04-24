import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Table } from "react-bootstrap";
// import { http } from "../config/httpExample";

export default function ShowClients() {
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/show")
      .then((response) => {
        console.log(response.data);
        const parsedData = JSON.parse(response.data);
        setClientsData(parsedData);
      })
      .catch((error) => {
        console.error(error);
      });

    // http
    //   .get("/show")
    //   .then((response) => {
    //     console.log(response.data);
    //     setClientsData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
