import React from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = {
  Button: {
    top: "40px",
    textTransform: "none",
    left: "1300px",
  },
  root: {
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    marginLeft: "80px",
    marginRight: "160px",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  line: {
    borderBottom: "1px solid #ccc",
    // marginBottom: "20px",
  },
};

const sampleChallenge = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h2>Title - Sample Challenge</h2>
      <Typography className={classes.description}>
        Build a web application which lets employees of an organisation to
        add/manage challenges for internal hackathons which they organise every
        month. Let's call this application Hack Ideas. The application should
        have these features, * Allow users to enter into application with
        'employee id'(password is not necessary). * Allow users to add a new
        challenges/ideas. * A challenge will have a title, description and tags
        * You can maintain fixed pre-defined tags (like 'feature', 'tech' etc.)
        * Users can upvote a challenge * Show the list of all challenges on home
        page * Allow users to sort challenges with votes count, creation date
      </Typography>
      <Typography sx={{ marginTop: "10px", marginBottom: "20px" }}>
        <strong>Tag:</strong> Feature
      </Typography>
      <div className={classes.line}></div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(sampleChallenge);
