import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <>
  <h1>Hi</h1>
    <div className='dashboard-row'>
    <div className='left-section'>
    <h3>Jobs</h3>
    </div>
    
    <input className="search-jobs"type="text" placeholder='Search Jobs'></input>
    <input className="search-location"type="text" placeholder='Search Locations'></input>
    <div className='last'>
    <img className="img-dashboard" src={dashboard}></img>
    </div>
    </div>
    <div className="dashboard-column">
    <div className="middle-section">
    </div>
    <div className='bottom-section'>
    <p1>Profile</p1><br></br>
    <p1>Enroll</p1><br></br>
    <p1>Trending</p1><br></br>
    <p1>Hackathon</p1><br></br>
    <p1>Resume</p1><br></br>
    <p1>Logout</p1><br></br>
    </div>


    </div>
    </>
   
  )
}

export default Home