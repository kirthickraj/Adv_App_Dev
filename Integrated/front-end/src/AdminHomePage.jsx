import React from 'react';
 import './AdminHomePage.css'; 
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className="admin-home">
      <header>
        <h1>Job Portal Admin</h1>
      </header>
      <main>
        <section className="statistics">
    <Link to="/admin"><button className="stat-card">Add Courses</button></Link> 
          
        </section>

      </main>
    </div>
  );
};

export default AdminHomePage;