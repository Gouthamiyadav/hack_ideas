// App.js
import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import SideNavBar from "./components/sideNavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (employeeId) => {
    const validEmployeeIds = ["123", "456", "789"];
    if (validEmployeeIds.includes(employeeId)) {
      setIsLoggedIn(true);
      // navigate("/home");
    } else {
      alert("Invalid employee ID. Please try again.");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<AuthForm onLogin={handleLogin} />} />
        ) : (
          <Route path="/home" element={<SideNavBar />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
