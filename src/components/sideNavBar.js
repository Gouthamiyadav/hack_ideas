import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import UpperNavBar from "./upNavBar";
import ChallengeForm from "./ChallengeForm";
import ChallengeList from "./ChallengeList";

const styles = {
  root: {
    left: 0,
    position: "fixed",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "32px",
    width: 230,
  },
  bottomNavigationAction: {
    padding: 0,
    height: 64,
    backgroundColor: "#ffffff",
  },
  textActive: {
    color: "#000000",
    fontStyle: "normal",
    fontFamily: "Inter !important",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    width: 60,
    marginLeft: 16,
  },
  verticalLine: {
    height: 64,
    width: 4,
    backgroundColor: "#00A0DF",
    marginRight: 36,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    display: "none",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 64,
    left: 2,
  },
  labelActiveText: {
    fontSize: 14,
    width: "100%",
    alignText: "center",
  },
  image: {
    height: 32,
    width: 32,
  },
};

const Footerlist = [
  {
    label: "Home",
    icon: "https://simg.nicepng.com/png/small/937-9379647_png-file-svg-instagram-home-icon-vector.png",
  },
  // {
  //   label: "Content",
  //   icon: "https://simg.nicepng.com/png/small/937-9379647_png-file-svg-instagram-home-icon-vector.png",
  // },
];

const SideNavBar = ({ classes }) => {
  const [challenges, setChallenges] = useState([]);
  const handleClick = (e) => {};

  const handleChallengeSubmit = (newChallenge) => {
    setChallenges([
      ...challenges,
      { ...newChallenge, id: challenges.length + 1, votes: 0 },
    ]);
  };

  const handleUpvote = (challengeId) => {
    setChallenges(
      challenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, votes: challenge.votes + 1 };
        }
        return challenge;
      })
    );
  };

  return (
    <React.Fragment>
      <UpperNavBar />
      <BottomNavigation
        onChange={handleClick}
        showLabels
        className={classes.root}
      >
        {Footerlist.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={
              <span className={classes.labelActiveText}>{item.label}</span>
            }
            classes={{ label: classes.textActive }}
            sx={{
              height: 64,
              flexDirection: "row",
              left: "20px",
              alignSelf: "flex-start",
            }}
            icon={
              <div className={classes.iconContainer}>
                <span className={classes.verticalLine}></span>
                <img src={item.icon} alt={item.alt} className={classes.image} />
              </div>
            }
          />
        ))}
      </BottomNavigation>
      <ChallengeForm onSubmit={handleChallengeSubmit} />
      <ChallengeList challenges={challenges} onUpvote={handleUpvote} />
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(SideNavBar);
