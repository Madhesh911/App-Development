import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    try {
      // Fetch the user data from the server (mocking with a local JSON server)
      const response = await axios.get('http://localhost:5003/users', {
        params: { email }
      });

      // Assuming the JSON server returns an array of users matching the email
      const [foundUser] = response.data.filter(user => user.password === password);

      if (foundUser) {
        setUser(foundUser); // Set the user data in context
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
