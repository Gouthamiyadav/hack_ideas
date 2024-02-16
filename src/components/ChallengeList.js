import React from "react";
import { styled } from "@mui/material/styles";
import ChallengeItem from "./ChallengeItem";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ChallengeList = ({ challenges, onUpvote }) => {
  // const [challenges, setChallenges] = useState([]);

  // useEffect(() => {
  //   fetchChallenges();
  // }, []);

  // const fetchChallenges = async () => {
  //   try {
  //     const response = await fetch("https://hackidea-7797daa46276.herokuapp.com/api/challenges");
  //     const data = await response.json();
  //     setChallenges(data.challenges);
  //   } catch (error) {
  //     console.error("Error fetching challenges:", error);
  //   }
  // };

  // const handleUpvote = async (challengeId) => {
  //   try {
  //     const response = await fetch(`https://hackidea-7797daa46276.herokuapp.com/api/challenges/${challengeId}/upvote`, {
  //       method: "POST",
  //     });
  //     if (response.ok) {
  //       fetchChallenges();
  //     } else {
  //       console.error("Failed to upvote challenge");
  //     }
  //   } catch (error) {
  //     console.error("Error upvoting challenge:", error);
  //   }
  // };

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
