import React, { useState } from 'react';
import './StudentRegistartion.css'; // Import your CSS file for styling

function StudentRegistration() {
  const [studentName, setStudentName] = useState('');
  const [registrationCourse, setRegistrationCourse] = useState('');
  const [result, setResult] = useState('');

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleRegistrationCourseChange = (e) => {
    setRegistrationCourse(e.target.value);
  };

  const handleStudentRegistration = () => {
    // Prepare the request data
    const requestData = {
      studentName: studentName,
      registrationCourse: registrationCourse,
    };

    // Make the API request
    fetch('/Student_post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration failed');
        }
        return response.text();
      })
      .then((text) => {
        setResult(text);
      })
      .catch((text) => {
        setResult(text);
      });
  };

  return (
    <div className="page-center">
    <div className="registration-container">
      <h2>Student Registration</h2>
      <div className="input-container">
        <label>Student Name:</label>
        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={handleStudentNameChange}
        />
      </div>
      <div className="input-container">
        <label>Registration Course:</label>
        <input
          type="text"
          placeholder="Enter registration course"
          value={registrationCourse}
          onChange={handleRegistrationCourseChange}
        />
      </div>
      <button className="registration-button" onClick={handleStudentRegistration}>
        Register
      </button>
      {result && <div className="result">{result}</div>}
    </div>
    </div>
   
  );
}


export default StudentRegistration;

