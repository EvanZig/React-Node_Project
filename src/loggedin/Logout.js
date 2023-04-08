import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { AuthContext } from '../contexts/Context';

export default function Logout(){
    const authContext = useContext(AuthContext)

    async function handleLogout() {
      await authContext.logout()
      }

    return (
        <Button onClick = {handleLogout}>Logout</Button>
    )
}