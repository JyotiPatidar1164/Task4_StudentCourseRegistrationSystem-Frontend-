import React, { useState } from 'react';
import './StudentRegistartion.css';


function CourseRegister() {
  const [capacity, setCapacity] = useState();
  const [description, setDescription] = useState();
  const [schedule, setSchedule] = useState();
  const [title, setTitle] = useState();
  const [result, setResult] = useState('');

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCourseRegistration = () => {
    // Prepare the request data
    const requestData = {
      capacity: capacity,
      description: description,
      schedule: schedule,
      title: title,
    };

    // Make the API request
    fetch('/post', {
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
      .catch((error) => {
        setResult(error.message);
      });
  };

  return (
    <div className="page-center">
      <div className="registration-container">
        <h2>Course Registration</h2>
        <div className="input-container">
          <label>Capacity:</label>
          <input
            type="number"
            value={capacity}
            onChange={handleCapacityChange}
          />
        </div>
        <div className="input-container">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="input-container">
          <label>Schedule (HH:mm:ss):</label>
          <input
            type="text"
            value={schedule}
            onChange={handleScheduleChange}
          />
        </div>
        <div className="input-container">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button className="registration-button" onClick={handleCourseRegistration}>
          Register
        </button>
        {result && <div className="result">{result}</div>}
      </div>
    </div>
  );
}

export default CourseRegister;
