import React from 'react';
import './index.css';

const CoursesPage = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>abcourse</h2>
        <a href="#" className="active">Overview</a>
        <a href="#">Chatbot</a>
        <a href="#">Courses</a>
        <a href="#">Statistics</a>
        <a href="#">Settings</a>
        <a href="#">Log Out</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Courses</h2>
        <p>Welcome back, Mulyono! Your progress is really good. Keep it up!</p>
        <div className="course-card">
          <span>Intermediate Grammar</span>
          <span>In Progress: 40%</span>
        </div>
        <div className="course-card">
          <span>Grammar Checker</span>
          <span>In Progress: 82%</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <h3>Mulyono</h3>
        <p>Student at Padjadjaran University</p>
        <div className="reminder-card">
          <p>Listening Test</p>
          <p>Practice Quiz</p>
        </div>
        <button>Manage Profile</button>
      </div>
    </div>
  );
};

export default CoursesPage;
