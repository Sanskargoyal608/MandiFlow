import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'; // Your Dashboard component
import Header from './Components/Header'; // Import Header component
import Menu from './Components/Menu'; // Import Menu component

const AppRouter = () => {
  return (
    <Router>
      
      <Menu /> {/* Display Menu on all routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
