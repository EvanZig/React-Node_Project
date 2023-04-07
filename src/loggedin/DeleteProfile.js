import React, {useState, useRef, useContext } from 'react'
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { AuthContext } from '../Context';

export default function DeleteProfile(){
    const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('idToken')}`,
    'Refresh-Token': localStorage.getItem('refreshToken'),
    };

    const authContext = useContext(AuthContext)

    const [isDeleting, setIsDeleting] = useState(false)
    const idDelete = useRef();
    

    const handleDelete = (event) => {
        event.preventDefault()
        setIsDeleting(true);
        axios.delete("http://localhost:3000/loggedin/delete",{}, {headers})
          .then(response => {
            console.log('User deleted successfully:', response.data);
            setIsDeleting(false);
            authContext.setAuthStatus('LoggedOut')
          })
          .catch(error => {
            console.error('Error deleting user:', error);
            setIsDeleting(false);
          });
      };

    return (
      <Form className ="delete" onSubmit={handleDelete}>
        <Button className='deleteButton' disabled = {isDeleting} type="submit">
           {isDeleting ? 'Deleting...' : 'Delete Profile'}
        </Button>
        <Form.Control className ="deleteInput" type="text" ref={idDelete} ></Form.Control>
        </Form>
    )
}