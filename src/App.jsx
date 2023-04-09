import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div>     

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;