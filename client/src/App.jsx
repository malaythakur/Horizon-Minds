import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import HomePage from './HomePage';
import { AuthProvider } from './components/auth/AuthContext';
import './App.css';
import BlogList from './components/blog/BlogList';
import Blog from './components/blog/Blog';

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/blogs" element={<BlogList />} />

            <Route path="/blog/:blogId" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;