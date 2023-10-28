// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div style={{ backgroundColor: 'lightblue', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <h1>STUDENT COURSE REGISTRATION SYSTEM</h1>
  <div style={{ height: '20px' }}></div>

  {/* First row with two buttons */}
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Link to="/ViewCourses">
      <button className="attractive-button blue-button">View Courses</button>
    </Link>

    <div style={{ width: '20px' }}></div> {/* Add some space */}
    <Link to="/ViewCourses1">
      <button className="attractive-button red-button">Student Registration</button>
    </Link>
  </div>

  {/* Second row with the third button */}
  <div style={{ height: '20px' }}></div>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Link to="/ViewCourses2">
      <button className="attractive-button green-button">Course Registration</button>
    </Link>
  </div>
</div>
    </>
  );
}

export default Home;
