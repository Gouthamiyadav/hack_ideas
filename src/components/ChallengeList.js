import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ChallengeForm from "./ChallengeForm";
import ChallengeItem from "./ChallengeItem";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ChallengeList = ({ onUpvote }) => {
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

  // const handleUpvote = async (challengeId, userId) => {
  //   try {
  //     const response = await fetch(
  //       `https://hackidea-7797daa46276.herokuapp.com/api/challenges/${challengeId}/upvote`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ userId }),
  //       }
  //     );
  //     if (response.ok) {
  //       setChallenges((prevChallenges) =>
  //         prevChallenges.map((challenge) =>
  //           challenge.id === challengeId
  //             ? { ...challenge, votes: challenge.votes + 1 }
  //             : challenge
  //         )
  //       );
  //     } else {
  //       console.error("Failed to upvote challenge");
  //     }
  //   } catch (error) {
  //     console.error("Error upvoting challenge:", error);
  //   }
  // };

  // const handleUpvote = (challengeId) => {
  //   setChallenges(
  //     challenges.map((challenge) => {
  //       if (challenge.id === challengeId) {
  //         return { ...challenge, votes: challenge.votes + 1 };
  //       }
  //       return challenge;
  //     })
  //   );
  // };

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
          onUpvote={onUpvote}
        />
      ))}
    </Container>
  );
};

export default ChallengeList;
