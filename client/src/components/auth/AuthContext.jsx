import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasPurchasedCourses, setHasPurchasedCourses] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            checkPurchasedCourses(token);
        }
    }, []);

    const checkPurchasedCourses = async (token) => {
        try {
            const response = await axios.get('http://localhost:3001/purchased/purchased-courses', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Purchased Courses: ', response.data);
            setHasPurchasedCourses(response.data.length > 0);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error checking purchased courses", error.response.data);
                if (error.response.status === 403) {
                    // Handle forbidden error (e.g., token expired, no permission)
                    setIsAuthenticated(false);
                    localStorage.removeItem('token');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received", error.request);
            } else {
                // Something happened in setting up the request
                console.error("Error", error.message);
            }
        }
    };

    const login = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            checkPurchasedCourses(token);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setHasPurchasedCourses(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, hasPurchasedCourses, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
