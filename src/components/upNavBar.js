import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const UpperNavBar = () => {
  const navigate = useNavigate();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setIsLogoutVisible(!!userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hack Ideas
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="account">
          <AccountCircleIcon />
        </IconButton>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavBar;
