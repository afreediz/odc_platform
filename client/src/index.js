import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsercontextWrapper from './context/userContext'
import JobcontextWrapper from './context/jobContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobcontextWrapper>
      <UsercontextWrapper>
        <App />
      </UsercontextWrapper>
    </JobcontextWrapper>
  </React.StrictMode>
);
