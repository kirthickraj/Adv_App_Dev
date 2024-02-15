import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Containers'>
    <nav>
      <ul>
        <li id='a' ><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
        <li className='dropdown' id='a' style={{marginLeft:"10cm"}}>
       
          <span className="dropbtn" >Admission</span>
          <div className="dropdown-content">
            <Link to="/eng" style={{textDecoration:"none",color:"white"}}>Engineering Courses</Link>
            <Link to="/arts" style={{textDecoration:"none",color:"white"}}>Arts Courses</Link>
          </div>
        </li>
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
      <li id='a' style={{marginLeft:"1.7cm"}}><Link to="/about"style={{textDecoration:"none",color:"white"}}>About</Link></li>
        <li id='a'style={{marginLeft:"1.1cm"}}><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact</Link></li>
        <li id='a'style={{marginLeft:"5cm"}}><Link to="/login"style={{textDecoration:"none",color:"white"}}>Login</Link></li>
       
      </ul>
    </nav>
</div>
  );
};

export default Navbar;