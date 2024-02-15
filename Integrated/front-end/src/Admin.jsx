import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = ({ addCourse }) => {
  const [course, setCourse] = useState({
    title: "",
    type: "",
    degree: "",
    courses: "",
    seats: 0,
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/add", course);
      alert("Your course has been added successfully!");
      console.log("Server response:", response.data);
      addCourse(course);
      setCourse({
        title: "",
        type: "",
        degree: "",
        courses: "",
        seats: 0,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="admin-container">
     <center> <h4>Admin Panel</h4></center>
      <form onSubmit={handleSubmit}>
       
        <label>
          Course Type:
          <select name="type" value={course.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="arts">Arts</option>
            <option value="engineering">Engineering</option>
          </select>
        </label>
        <label>
          Degree:
          <input type="text" name="degree" value={course.degree} onChange={handleChange} required />
        </label>
        <label>
          Courses:
          <input type="text" name="courses" value={course.courses} onChange={handleChange} required />
        </label>
        <label>
          Seats:
          <input type="number" name="seats" value={course.seats} onChange={handleChange} required />
        </label>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default Admin;
