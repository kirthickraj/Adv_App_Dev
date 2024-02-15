// import React from "react";

// const AdminDelete = ({ courses, setCourses }) => {
//   const handleDeleteCourse = (degree) => {
//     // Filter out the courses with the provided degree
//     const updatedCourses = courses.filter((course) => course.degree !== degree);
//     // Update the courses state with the filtered array
//     // setCourses(updatedCourses);
//   };

//   return (
//     <div className="admin-container">
//       <h4>Admin Panel - Delete Courses</h4>
//       <div>
//         {courses.map((course) => (
//           <div key={course.id}>
//             <p>Title: {course.title}</p>
//             <p>Type: {course.type}</p>
//             <p>Degree: {course.degree}</p>
//             <p>Courses: {course.courses}</p>
//             <p>Seats: {course.seats}</p>
//             {/* Example: Button to delete courses by degree */}
//             <button onClick={() => handleDeleteCourse(course.degree)}>Delete by Degree</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDelete;
