// App.js
import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";
import SideNavBar from "./components/sideNavBar";
import UpperNavBar from "./components/upNavBar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [challenges, setChallenges] = useState([]);

  const handleLogin = (employeeId) => {
    const validEmployeeIds = ["123", "456", "789"];
    if (validEmployeeIds.includes(employeeId)) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid employee ID. Please try again.");
    }
  };

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
    <div>
      {!isLoggedIn ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <>
          <SideNavBar />
          <UpperNavBar />
          <ChallengeForm onSubmit={handleChallengeSubmit} />
          <ChallengeList challenges={challenges} onUpvote={handleUpvote} />
        </>
      )}
    </div>
  );
};

export default App;
