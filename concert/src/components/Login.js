import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {

    return(
    <>
        <h3>Login</h3>
        <br/>
        <Link to="/dash">Group Dash</Link>
        <br/><br/>
    </>
    );
};
   

export default Login;