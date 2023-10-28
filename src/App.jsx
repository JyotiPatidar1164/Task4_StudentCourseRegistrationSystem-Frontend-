// App.js
import React from 'react';
import './Home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewCourses from './ViewCourses';
import StudentRegistration from './StudentRegistration';
import CourseRegister from './CourseRegister';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewCourses" element={<ViewCourses />} />
        <Route path="/ViewCourses1" element={<StudentRegistration />} />
        <Route path="/ViewCourses2" element={<CourseRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
