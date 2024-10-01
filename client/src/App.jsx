import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';

import { AuthProvider } from './components/auth/AuthContext';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  },[]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;