import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Table} from 'react-bootstrap';

export default function ShowClients(){

    const [clientsData,setClientsData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/loggedin/showusers")
        .then((response) => {
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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Date of birth</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {clientsData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.date_of_birth}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    )
}