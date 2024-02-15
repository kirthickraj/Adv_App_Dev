// ArtsCourses.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtsCourses.css";

const ArtsCourses = ({ courses, applyForCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleApply = (course) => {
    if (course.seats > 0) {
      const updatedCourse = { ...course, seats: course.seats - 1 };
      setSelectedCourse(updatedCourse);
      applyForCourse(updatedCourse);
    }
  };

  const handleClick = (index) => {
    setSelectedCourse(index);
  };

  return (
    <div>
      <div className="arts-img">
        <div className="center">
          <center>
            <h2 className="headi">Arts College Courses</h2>
          </center>
        </div>
        <div className="courses-container">
          {courses?.map((course, index) => (
            <div
              key={index}
              className={`course-box ${selectedCourse === index ? "clicked" : ""}`}
              onClick={() => handleClick(index)}
            >
              <h3>{course.degree}</h3>
              <p>{course.courses}</p>
              <p>Available Seats: {course.seats}</p>
              <div className="apply-button">
                {course.seats > 0 ? (
                  <Link to="/apply">
                    <button onClick={() => handleApply(course)} disabled={selectedCourse === index}>
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
    </div>
  );
};

export default ArtsCourses;
