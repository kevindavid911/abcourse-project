import React from 'react';
import './index.css';

const OverviewPage = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <img src="logo.png" alt="Logo" />
          <div className="menu">
            <a href="#" className="active">Overview</a>
            <a href="#">Chatbot</a>
            <a href="#">Courses</a>
            <a href="#">Statistics</a>
            <a href="#">Settings</a>
          </div>
        </div>
        <a href="#" className="logout">Log out</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">Overview</div>
        <div className="overview-card">
          <div>
            <h3>9.6 AVERAGE SCORE</h3>
            <p>Better than 86% of students</p>
          </div>
        </div>
        <div className="courses">
          <h3>Featured Courses</h3>
          <div className="course-list">
            <div className="course-item"><span>Introduction</span><span>Feb 12</span><span>⭐ 4.8</span></div>
            <div className="course-item"><span>Beginner Grammar</span><span>Feb 14</span><span>⭐ 4.6</span></div>
            <div className="course-item"><span>Intermediate Grammar</span><span>Feb 16</span><span>⭐ 4.5</span></div>
            <div className="course-item"><span>Grammar Checker</span><span>Feb 18</span><span>⭐ 4.8</span></div>
          </div>
        </div>
      </div>

      {/* Profile Panel */}
      <div className="profile-panel">
        <img src="user.png" alt="Profile" className="profile-img" />
        <h3>Mulyono</h3>
        <p>Student at Padjadjaran University</p>
        <button>Manage Profile</button>
      </div>
    </div>
  );
};

export default OverviewPage;
