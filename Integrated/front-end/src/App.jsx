import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Forms from './Register.jsx';
import EngineeringCourses from './EngineeringCourses';
import ArtsCourses from './ArtsCourses';
import ApplyForm from './ApplyForm.jsx';
import Admin from './Admin.jsx';
import HomePage from './HomePage.jsx';
import ContactPage from './Contact.jsx';
import About from './About.jsx';
import AdminHomePage from './AdminHomePage.jsx';
import Login from './Login.jsx';
import AdminView from './AdminView.jsx';

const App = () => {
  const [artsCourses, setArtsCourses] = useState(JSON.parse(localStorage.getItem('artsCourses')) || []);
  const [engineeringCourses, setEngineeringCourses] = useState(JSON.parse(localStorage.getItem('engineeringCourses')) || []);

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
    console.log(`Applying for course: ${course.title}`);
  };

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Forms />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/eng" element={<EngineeringCourses courses={engineeringCourses} applyForCourse={applyForCourse} />} />
          <Route path="/arts" element={<ArtsCourses courses={artsCourses} applyForCourse={applyForCourse} />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/admin" element={<Admin addCourse={addCourse} />} />
          <Route path="/add" element={<AdminHomePage />} />
          <Route path="/view" element={<AdminView/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
