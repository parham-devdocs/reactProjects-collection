import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Example components for demonstration
function Home() {
  return <h2>Home Page</h2>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

function Detail() {
  return (
    <div>
      <h3>Detail Page</h3>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

function Location() {
  return <h3>Location Page</h3>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<App />}>
          {/* Define nested routes inside App */}
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />}>
            <Route path="detail" element={<Detail />}>
              <Route path="location" element={<Location />} />
            </Route>
          </Route>
        </Route>

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();