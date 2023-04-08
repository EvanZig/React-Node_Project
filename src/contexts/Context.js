import React, {useState, useEffect, useContext} from "react";
import axios from 'axios'

//Defining default state and creating it
const defaultState = {
  tokens: {},
  authStatus: 'LoggedOut',
  userAllowed: false,
}

export const AuthContext = React.createContext(defaultState)

export const AuthIsSignedIn = ({children}) => {
  const {authStatus} = useContext(AuthContext)

  return <>{authStatus === 'LoggedIn' ? children : null}</>
}

export const AuthIsNotSignedIn = ({children}) => {
  const {authStatus} = useContext(AuthContext)

  return <>{authStatus === 'LoggedOut' ? children: null}</>
}

export const AuthProvider = ({children}) => {
  const [tokens, setTokens] = React.useState({});
  const [authStatus, setAuthStatus] = useState('LoggedOut')
  const [userAllowed, setUserAllowed] = useState(false)


useEffect(() => {
  if(window.localStorage.getItem('userAllowed')){
    setUserAllowed(true)
  }
  getSessionInfo()
}, [authStatus,setAuthStatus, userAllowed, setUserAllowed])

async function getSessionInfo() {
  try {
    setTokens({
      idToken: localStorage.getItem('idToken'),
      refreshToken: localStorage.getItem('refreshToken'),
    })
    // setAuthStatus('LoggedIn')
  } catch (err) {
    setAuthStatus('LoggedOut')
  }
}

async function signInWithEmail(email, password, setWrongCredentials){

  await axios.post("http://localhost:3000/login",
      {email: email,
      password: password})
      .then((response) => {
        const {idToken, refreshToken} = response.data;
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('refreshToken', refreshToken)
        setAuthStatus('LoggedIn')
      })
      .catch((error)=> {
        console.error(error);
        setWrongCredentials(true)
      })
}

async function logout(){
    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
    setAuthStatus('LoggedOut')
    setTokens({})
  }

const state = {
  signInWithEmail,
  logout,
  getSessionInfo,
  tokens,
  userAllowed,
  authStatus,
  setAuthStatus,
}

  return (
    <AuthContext.Provider value={ state }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider