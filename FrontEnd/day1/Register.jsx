// Forms.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
// import './Form.css';
// import './Register.css'
import user from './assets/user.jpg';

function Forms() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Error, setError] = useState(false);

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (Username.length === 0) {
      setError(true);
      hasError = true;
    }

    if (Email.length === 0 || !validateEmail(Email)) {
      setError(true);
      hasError = true;
    }

    if (Mobile.length !== 10) {
      setError(true);
      hasError = true;
    }

    if (Password.length === 0) {
      setError(true);
      hasError = true;
    }

    if (ConfirmPassword.length === 0 || Password !== ConfirmPassword) {
      setError(true);
      hasError = true;
    }

    if (!hasError) {
      // Proceed with your form submission logic
      const formData = {
        username: Username,
        email: Email,
        mobile: Mobile,
        password: Password,
        confirmPassword: ConfirmPassword,
      };

      // Example: Send formData to a server or perform other actions

      // Navigate to another route after successful form submission
      navigate('/login');
    }
  };

  return (
    <div className="Registration">
      <Form className="form22" onSubmit={handleSubmit}>
        <div>
         
            <h3 style={{textAlign:"center"}}>Register Here</h3>
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
              {Error && Username.length === 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Email</Form.Label>
              <Form.Control
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {Error && Email.length === 0 ? (
                <Form.Label className="error">Email can't be empty</Form.Label>
              ) : ''}
              {Error && Email.length > 0 && !validateEmail(Email) ? (
                <Form.Label className="error">Email should end with @gmail.com</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formBasicMobile" className="col col-sm-10">
              <Form.Label className="input">Mobile Number</Form.Label>
              <Form.Control
                placeholder="Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              {Error && Mobile.length !== 10 ? (
                <Form.Label className="error">Mobile number should be 10 digits</Form.Label>
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
              {Error && Password.length === 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Confirm Password</Form.Label>
              <Form.Control
                placeholder="Re-Enter Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {Error &&
              (ConfirmPassword.length === 0 || Password !== ConfirmPassword) ? (
                <Form.Label className="error">Passwords do not match</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <center>
            <button id="button" className="me-1 btn btn btn-lg" type="submit">
              Submit
            </button>
          </center>
        </div>
        <center>
          <Link to='/login'>Already have an account? Login here.</Link>
        </center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Forms;
