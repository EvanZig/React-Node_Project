import React, {useState, useRef, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button , Form, Modal} from 'react-bootstrap'
import { AuthContext } from '../Context'


export default function Login(){
  const [show, setShow] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const emailInput = useRef();
  const passwordInput = useRef();

  const authContext = useContext(AuthContext)
  // const navigate = useNavigate();

  async function handleSubmit(event){
    event.preventDefault();
      const email = emailInput.current.value
      const password = passwordInput.current.value

      await authContext.signInWithEmail(email,password,setWrongCredentials)

      // axios.post("http://localhost:3000/login",
      // {email: email,
      // password: password})
      // .then((response) => {
      //   const accessToken = response.data;
      //   localStorage.setItem('access_token', accessToken)
      //   if(response.status === 200){
      //     navigate('/loggedinprofile')
      //   }
      // })
      // .catch((error)=> {
      //   console.error(error);
      //   setWrongCredentials(true)
      //   // navigate('/loggedinprofile')
      // })
  }

    return(
        <div>
          <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Form style ={{width: '90%'}} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInput}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            <div className ="errorLogin">{wrongCredentials ? "wrong credentials": ""}</div>
          </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInput} />
          <div className ="errorLogin">{wrongCredentials ? "wrong credentials": ""}</div>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="primary" type="submit">
            Login
          </Button>
          
        </Modal.Footer>
        </Form>
      </Modal>

        </div>
    )
}