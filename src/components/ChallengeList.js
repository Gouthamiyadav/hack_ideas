import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ChallengeForm from "./ChallengeForm";
import ChallengeItem from "./ChallengeItem";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // marginLeft: "100px",
});

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await fetch(
        "https://hackidea-7797daa46276.herokuapp.com/api/challenges"
      );
      const data = await response.json();
      setChallenges(data.challenges);
    } catch (error) {
      console.error("Error fetching challenges:", error);
    }
  };
  const handleUpvote = (challengeId) => {
    setChallenges(
      challenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, votes: challenge.votes };
        }
        return challenge;
      })
    );
  };
  const handleChallengeSubmit = (newChallenge) => {
    setChallenges([
      ...challenges,
      { ...newChallenge, id: challenges.length + 1, votes: 0 },
    ]);
  };

  return (
    <Container>
      <ChallengeForm onSubmit={handleChallengeSubmit} />
      {challenges.map((challenge) => (
        <ChallengeItem
          key={challenge.id}
          challenge={challenge}
          onUpvote={handleUpvote}
        />
      ))}
    </Container>
  );
};

export default ChallengeList;
