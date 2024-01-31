// ApplyForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap'; 
import './ApplyForm.css'

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    percentage10: "",
    percentage12: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);
    // You can redirect the user to a confirmation page or perform other actions here
    alert("Your Application is successfully submitted");

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      percentage10: "",
      percentage12: "",
    });
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
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
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
              name="percentage10"
              value={formData.percentage10}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            12th Percentage:
            <input
              type="text"
              name="percentage12"
              value={formData.percentage12}
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
