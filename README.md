This is a webapp i made during my internship using react, node, express and mySQL which includes an authentication system utilizing json web tokens 
with login/register forms, a crud page and a responsive topbar for a hypothetical e-commerce website.

Front end:
For the UI i used CoreUI for the register/login modals and topbar and for the crud page which is shown after the user is logged in i used react-bootstrap.
I used react-router for the routing between the main and logged in page.
The libraries Formik and yup were used to validate the login and register forms.
Axios was used for the api calls.

Back end: 
Library mysql2 was used to connect with the mySQL database as well as make a pool of 10 connections.
jsonwebtoken and express libraries are used for the authentication system. After a succesfull login or register the user is given an id token which expires
in 10 seconds and a refresh token which expires after 7 days. After that whenever the user makes an api call, he sends his id and refresh token as headers to the back end.
There the authTokens function is called which verifies that the id token is valid. If its not valid the refresh token is checked and if its valid a new id token is created.
The tokens are verified with the secret id and refresh tokens i created in my .env file.
Express was used to create the routes for each api call. Whenever the user requires to utilize the database a connection from the pool is opened asynchronously and when the action 
is finished the connection is released back in the connection pool.
