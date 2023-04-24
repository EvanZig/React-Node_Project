import React, { useState } from "react";
import ShowClients from "./ShowClients";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import DeleteProfile from "./DeleteProfile";
import UpdateProfile from "./UpdateProfile";
import Logout from "./Logout";

export default function LoggedInProfile() {
  const [showTable, setShowTable] = useState(false);

  function toggleTable() {
    setShowTable(!showTable);
  }

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
}
