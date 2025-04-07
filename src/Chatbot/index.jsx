import React from 'react';
import './index.css';

const ChatbotPage = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">abcourse</div>
        <ul>
          <li>Overview</li>
          <li className="active">Chatbot</li>
          <li>Courses</li>
          <li>Statistic</li>
          <li>Settings</li>
        </ul>
        <div className="logout">Log out</div>
      </div>

      {/* Chat Container */}
      <div className="chat-container">
        {/* Chat Header */}
        <div className="chat-header">
          <span className="icon">✨</span>
          <h2>Ask our AI anything</h2>
        </div>

        {/* Chat Suggestions */}
        <div className="chat-suggestions">
          <button>What can I ask you to do?</button>
          <button>Which one of my projects is performing the best?</button>
          <button>What projects should I be concerned about right now?</button>
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input type="text" placeholder="Ask me anything about your projects" />
          <button className="send-btn">➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
