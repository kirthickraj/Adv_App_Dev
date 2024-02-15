import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap'; 
import './ApplyForm.css';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    tenthpercentage: "",
    twelvethpercentage: ""
  });
  // setFormData( {...formData, ["email"]: localStorage.getItem("email") });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/adddetails', formData);
      console.log("Server response:", response.data);
      alert("Your Application is successfully submitted");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        state: "",
        tenthpercentage: "",
        twelvethpercentage: "",
        // course_id:
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your application. Please try again later.");
    }
  };

  return (
    <div className="main">
      <div className="form2">
        <Form onSubmit={handleSubmit}>
          <div className="data">
            <h3 style={{ textAlign: "center" }}>Application Form</h3>
          </div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} disabled />
          </label>
          <label>
            Phone:
            <input type="tel"  name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </label>
          <label>
          10th Percentage:
          <input
            type="text"
            name="tenthpercentage"
            value={formData.tenthpercentage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          12th Percentage:
          <input
            type="text"
            name="twelvethpercentage"
            value={formData.twelvethpercentage}
            onChange={handleChange}
            required
          />
        </label>
          <button type="submit">Submit Application</button>
        </Form>
      </div>
    </div>
  );
};

export default ApplyForm;
