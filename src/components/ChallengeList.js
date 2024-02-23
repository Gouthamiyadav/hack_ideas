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
  const handleUpvote = async (challengeId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const formData = new URLSearchParams();
      formData.append("userId", user._id);
      const response = await fetch(
        `https://hackidea-7797daa46276.herokuapp.com/api/challenges/${challengeId}/upvote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );
      await fetchChallenges();
    } catch (err) {
      console.error("Network error:", err);
    }
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
