import React from 'react';
import university from "./assets/university.jpg";
import Navbar from './Navbar.jsx';
import './About.css';

function About() {
  return (
    <div className='emoty'>
      <Navbar />
      <div className='container'>
        <br /><br /><br /><br />
        <h1 className='h1'>About Us</h1>
        <div className='contain'>
          <p>
            Welcome to SKCET university! We are a leading institution committed to providing
            quality education and fostering a vibrant learning community.
            Our Mission: To empower students with knowledge, skills, and values for a successful and
            fulfilling life.
            Academic Excellence: We strive for academic excellence and offer a diverse range of
            programs across various disciplines. Our faculty members are experts in their fields,
            ensuring that students receive top-notch education.
            Global Community: At [Your University Name], we embrace diversity and inclusivity. Our
            campus is a melting pot of cultures, and we take pride in our global community. Students
            from around the world come together to share ideas and perspectives.
            State-of-the-Art Facilities: Our campus features modern facilities, including
            state-of-the-art classrooms, laboratories, libraries, and recreational spaces. We provide
            an environment that fosters both academic and personal growth.
            Community Engagement: We actively engage with the local community through various
            outreach programs and initiatives. Our students have opportunities to contribute to
            society and make a positive impact.
           
          </p>
          <img src={university} alt="University" className='abt' />
        </div>
      </div>
    </div>
  );
}

export default About;
