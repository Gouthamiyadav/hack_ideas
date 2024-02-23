import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./components/Login/AuthForm";
import HomePage from "./components/HomePage";

const App = () => {
  const [userData, setUserData] = useState(localStorage.getItem("user"));

  useEffect(() => {
    setUserData(!!userData);
  }, [localStorage.getItem("user")]);

  const handleLogin = (employeeId) => {
    console.log("employeeId value is", employeeId);
    if (employeeId) {
      setUserData(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
      alert("Invalid employee ID. Please try again.");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
