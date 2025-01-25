"use client";

import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example signUp function
  const signUp = async (name, email, password) => {
    // Add your API logic here for user registration
    // This is just an example that simulates a successful signup
    try {
      // Simulate API call for user sign-up
      console.log("User signed up:", { name, email, password });
      setIsAuthenticated(true); // Set authenticated state to true after successful sign-up
    } catch (error) {
      throw new Error("Sign-up failed.");
    }
  };

  const login = () => setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);
