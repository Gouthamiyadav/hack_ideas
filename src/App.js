import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/Login/AuthForm";
import HomePage from "./components/HomePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = (employeeId) => {
    if (employeeId) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.removeItem("isLoggedIn");
    } else {
      alert("Invalid employee ID. Please try again.");
    }
  };

  return (
    <BrowserRouter>
      {!isLoggedIn && (
        <div>
          <AuthForm onLogin={handleLogin} />
        </div>
      )}
      {isLoggedIn && (
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
export default App;
