import React, { useState } from "react";
import SideNavBar from "./components/sideNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/Login/AuthForm";

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
          <Route path="/home" element={<SideNavBar />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
export default App;
