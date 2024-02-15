import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import './Form.css';
import user from './assets/user.jpg';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (Username.length === 0) {
      setUsernameError(true);
      hasError = true;
    } else {
      setUsernameError(false);
    }

    if (Password.length === 0) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    setError(hasError);
    axios.post("http://127.0.0.1:8081/api/v1/auth/login", { email:Username, password: Password})
          .then((response) => {
              console.log(response);
              // SetResponse(response);
              localStorage.setItem("email",response.data.email)
              localStorage.setItem("password",response.data.password)
              navigate("/")
          })
          .catch((error) => {
              // Handle error here, for example:
              console.error('Error registering user:', error);
              alert("Wrong User")
              // You can also update state to display a user-friendly error message
          });
      console.log('Form submitted:', { Username, Password });

    // if (!hasError) {
    //   const data = {
    //     Username,
    //     Password,
    //   };
    //   if (role === 'user') {
    //     navigate('/');
    //   } else if (role === 'admin') {
    //     navigate('/add');
    //   }
    // }

  };

  return (
    <div className="Registration2">
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <h3 style={{ textAlign: "center" }}>LOGIN</h3>
          <br />
          <div className="users">
            <img src={user} alt=" " width={100} />
            <span className="fa fa-user-o"></span>
          </div>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Username</Form.Label>
              <Form.Control
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && Username.length <= 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Form.Label className="input">Password</Form.Label>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && Password.length <= 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>


          <center>
            <button id="button" className="me-1 btn btn btn-lg" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </center>
        </div>
        <center>
          <Link to='/reg'>Don't have an account? Register here.</Link>
        </center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;