import React from "react";
import { styled } from "@mui/material/styles";
import ChallengeItem from "./ChallengeItem";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ChallengeList = ({ challenges, onUpvote }) => {
  return (
    <Container>
      {challenges.map((challenge) => (
        <ChallengeItem
          key={challenge.id}
          challenge={challenge}
          onUpvote={onUpvote}
        />
      ))}
    </Container>
  );
};

export default ChallengeList;
