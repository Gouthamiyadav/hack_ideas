import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f0f0",
  },
  paperStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px",
    background: "#fff",
    width: "400px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  errMessage: {
    display: "flex",
    alignItems: "center",
    fontSize: "6px",
    color: "#FF0000",
    paddingBottom: "10px",
  },
};

const AuthForm = ({ classes, onLogin }) => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId }),
      });
      onLogin(employeeId);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paperStyle}>
        <Typography
          component="div"
          sx={{
            fontFamily: "Inter",
            color: "#00A0DFFF",
            fontSize: "30px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          HACKATHON
        </Typography>
        <Typography
          component="div"
          sx={{
            fontFamily: "Inter",
            color: "#00000099",
            fontSize: "16px",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          Hack Ideas - Organize Your Internal Hackathons
        </Typography>
        <TextField
          sx={{ width: "100%", marginBottom: "16px" }}
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          label="Enter Employee ID"
        />
        <Button
          sx={{ width: "100%", marginTop: "14px", marginBottom: "20px" }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(AuthForm);
