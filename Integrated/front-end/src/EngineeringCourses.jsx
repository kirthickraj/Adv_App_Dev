import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EngineeringCourses.css";
import Navbar from "./Navbar";

const Engineering = ({ courses, applyForCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleApply = (course) => {
    // Check if seats are available before applying
    if (course.seats > 0) {
      // Decrease seats by 1
      const updatedCourse = { ...course, seats: course.seats - 1 };
      // Set the selected course and apply for it
      setSelectedCourse(updatedCourse);
      applyForCourse(updatedCourse);
    }
  };

  return (
    <div className="whole-img">
      <Navbar/>
      <h2 className="headingg">Engineering College Courses</h2>
      <div className="courses-container">
        {courses?.map((course, index) => (
          <div key={index} className="course-boxs">
            <h3>{course.degree}</h3>
            <p>{course.courses}</p>
            <p>Available Seats: {course.seats}</p>
            <div>
              {course.seats > 0 ? (
                <Link to="/apply">
                  <button onClick={() => handleApply(course)} disabled={selectedCourse === course}>
                    Apply
                  </button>
                </Link>
              ) : (
                <span>No seats available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engineering;