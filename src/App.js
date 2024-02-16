import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import SideNavBar from "./components/sideNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (employeeId) => {
    if (employeeId) {
      setIsLoggedIn(true);
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
      <Routes>
        <Route path="/home" element={<SideNavBar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
