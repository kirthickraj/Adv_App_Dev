import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Forms from './Register.jsx';
import EngineeringCourses from './EngineeringCourses';
import ArtsCourses from './ArtsCourses';
import ApplyForm from './ApplyForm.jsx';
import Admin from './Admin.jsx';
import HomePage from './HomePage.jsx';
import About from './Components/About.jsx';


const App = () => {
  // Retrieve courses from localStorage on component mount
  const [artsCourses, setArtsCourses] = useState(JSON.parse(localStorage.getItem('artsCourses')) || []);
  const [engineeringCourses, setEngineeringCourses] = useState(
    JSON.parse(localStorage.getItem('engineeringCourses')) || []
  );

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('artsCourses', JSON.stringify(artsCourses));
    localStorage.setItem('engineeringCourses', JSON.stringify(engineeringCourses));
  }, [artsCourses, engineeringCourses]);

  const addCourse = (course) => {
    const newCourses = [...(course.type === 'arts' ? artsCourses : engineeringCourses), course];
    if (course.type === 'arts') {
      setArtsCourses(newCourses);
    } else {
      setEngineeringCourses(newCourses);
    }
  };

  const applyForCourse = (course) => {
    // Add logic to handle applying for a course
    console.log(`Applying for course: ${course.title}`);
  };

  return (
    <div className="app-container">
      <Router>
        <nav>
         
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reg" element={<Forms/>} />
          
          <Route
            path="/eng"
            element={<EngineeringCourses courses={engineeringCourses} applyForCourse={applyForCourse} />}
          />
          <Route path="/about" element={<About/>}/>
          <Route path="/arts" element={<ArtsCourses courses={artsCourses} applyForCourse={applyForCourse} />} />
          <Route path="/apply" element={<ApplyForm/>} />
          <Route path="/admin" element={<Admin addCourse={addCourse} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
// import HomePage from './HomePage';
// import './App.css'; // Import your global CSS file for styling
// import AboutUs from './AboutUs';
// import Engineering from './Engineering';
// import Arts from './Arts';
// import Contact from './Contact';
// import Apply from './Apply';
// import Admin from './Admin';


// const App = () => {
//   return (
//       <div className="app-container">
//       <Router>
//         <Routes>
//           <Route path="/"  element={<HomePage/>} />
//           <Route path="/login" element={<LoginForm/>} />
//           <Route path="/register" element={<RegistrationForm/>} />
//           <Route path="/about" element={<AboutUs/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//           <Route path="/eng" element={<Engineering/>}/>
//           <Route path="/arts" element={<Arts/>}/>
//           <Route path="/apply" element={<Apply/>}/>
//           <Route path="/admin" element={<Admin/>}/>
//           </Routes>
//           </Router>
//       </div>
      
//   );
// };

// export default App;