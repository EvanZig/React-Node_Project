import React, { useState, useEffect } from "react";
import ShowClients from "./ShowClients";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import DeleteProfile from "./DeleteProfile";
import UpdateProfile from "./UpdateProfile";
import Logout from "./Logout";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function LoggedInProfile() {
  //get token
  const token = localStorage.getItem("acces_token");
  const authorized = false;

  const [showTable, setShowTable] = useState(false);

  // useEffect(() => {
  //     const headers = { Authorization: `Bearer ${token}` };
  //     axios.get('http://localhost:3000/loggedin', {headers})
  //     .then((response) =>{ authorized = response.data})
  //     .catch((error) => { console.log(error)})
  // }, [])

  function toggleTable() {
    setShowTable(!showTable);
  }

  // if(authorized){
  return (
    <div>
      <div className="LoggedinHeader">
        <Logout />
      </div>
      <Button onClick={toggleTable}>
        {showTable ? "hide table" : "show table"}
      </Button>
      {showTable && <ShowClients />}
      <DeleteProfile />
      <UpdateProfile />
    </div>
  );
  // }
  // else {
  //     return <Navigate to="/" />
  // }
}
