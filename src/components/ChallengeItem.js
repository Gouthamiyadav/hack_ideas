import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = {
  root: {
    borderRadius: "4px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    margin: "0px 170px 10px 240px",
  },
  content: {
    flex: 1,
    marginLeft: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  line: {
    borderBottom: "1px solid #ccc",
    marginBottom: "10px",
    marginLeft: "240px",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    marginTop: "10px",
    marginRight: "100px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
  },
  description: {
    marginBottom: "10px",
  },
  div: {
    display: "flex",
    flexDirection: "row",
  },
};

const ChallengeItem = ({ classes, challenge, onUpvote }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleUpvote = () => {
    onUpvote(challenge.id);
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.content} onClick={handleToggleDetails}>
          <h3>{challenge.title}</h3>
          {/* {showDetails && ( */}
          <>
            <Typography className={classes.description}>
              {challenge.description}
            </Typography>
            <Typography>
              <strong>Tag:</strong> {challenge.tags}
            </Typography>
          </>
          {/* )} */}
          <div className={classes.div}>
            <button className={classes.button} onClick={handleUpvote}>
              Votes
            </button>
            <Typography sx={{ marginTop: "18px" }}>
              <strong>Votes:</strong> {challenge.votes}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default withStyles(styles)(ChallengeItem);
