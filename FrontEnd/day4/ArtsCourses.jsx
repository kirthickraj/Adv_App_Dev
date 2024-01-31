import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtsCourses.css";

const ArtsCourses = ({ courses, applyForCourse }) => {
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
    <div>
    <div className="center">
     <center><h2>Arts College Courses</h2></center> 
     </div>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Courses</th>
            <th>Available Seats</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.degree}</td>
              <td>{course.courses}</td>
              <td>{course.seats}</td>
              <td>
                {course.seats > 0 ? (
                <Link to="/apply"> <button onClick={() => handleApply(course)} disabled={selectedCourse === course}>
                    Apply
                  </button></Link> 
                ) : (
                  <span>No seats available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtsCourses;
