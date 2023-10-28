import React, { useState, useEffect } from 'react';
import './Viewcourse.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for routing

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch the data from your API endpoint
    fetch('/get')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleDelete = (courseCode) => {
    // Send a DELETE request to the API with the courseCode
    fetch(`/delete/${courseCode}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Course removed Successfully') {
        //  navigate('/ViewCourses');
        
        } else {
          console.error('Failed to delete course:', result.message);
        }
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  return (
    <div className="App">
      <h1 className="centered">Course Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Title</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course) => (
            <tr key={course.course_Code}>
              <td>{course.course_Code}</td>
              <td className="blue-title">{course.title}</td>
              <td className="red-data">{course.description}</td>
              <td className="red-data">{course.capacity}</td>
              <td className="red-data">{course.schedule}</td>
              <td>
              <Link to="/ViewCourses">
                <button onClick={() => handleDelete(course.course_Code)}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
