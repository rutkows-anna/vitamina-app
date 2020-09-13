import React from "react";
import { Link } from "react-router-dom";

import ChallengeImage1 from "./image/challenge1.jpg";
import ChallengeImage2 from "./image/challenge2.jpg";
import ChallengeImage3 from "./image/challenge3.jpg";
import ChallengeImage4 from "./image/challenge4.jpg";
import ChallengeImage5 from "./image/challenge5.jpg";
import ChallengeImage6 from "./image/challenge6.jpg";
import ChallengeImage7 from "./image/challenge7.jpg";
import ChallengeImage8 from "./image/challenge8.jpg";
import ChallengeImage9 from "./image/challenge9.jpg";
import ChallengeImage10 from "./image/challenge10.jpg";
import styles from "./Challenges.module.css";

export const getImage = (imgKey) => {
  switch (imgKey) {
    case "ChallengeImage1":
      return ChallengeImage1;
    case "ChallengeImage2":
      return ChallengeImage2;
    case "ChallengeImage3":
      return ChallengeImage3;
    case "ChallengeImage4":
      return ChallengeImage4;
    case "ChallengeImage5":
      return ChallengeImage5;
    case "ChallengeImage6":
      return ChallengeImage6;
    case "ChallengeImage7":
      return ChallengeImage7;
    case "ChallengeImage8":
      return ChallengeImage8;
    case "ChallengeImage9":
      return ChallengeImage9;
    case "ChallengeImage10":
      return ChallengeImage10;
    default:
      return null;
  }
};

const ChallengesList = ({ challenges, filter }) => {
  const filterTitle = ({ title }) => {
    if (filter) {
      return title.toLowerCase().includes(filter.toLowerCase());
    } else {
      return challenges;
    }
  };
  const filteredChallenge = challenges.filter(filterTitle);

  if (filteredChallenge.length === 0) {
    return (
      <div>
        <h3 style={{ color: "#000" }}>wpisany tytuł nieistnieje</h3>
      </div>
    );
  }

  return (
    <div className={styles.card_list}>
      {filteredChallenge.map((challenge) => (
        <Link
          to={`challenges/${challenge.id}`}
          className={styles.card}
          key={challenge.id}
        >
          <img
            src={getImage(challenge.img)}
            alt={challenge.title}
            className={styles.img}
          />
          <div className={styles.card_title}>
            <h3 style={{ color: "#fff" }}>{challenge.title}</h3>
            <p>{challenge.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChallengesList;
