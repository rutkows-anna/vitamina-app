import React from "react";
import { Link } from "react-router-dom";
import trophy from "./image/trophy.png";
import styles from "./Challenges.module.css";
import { getImage } from "./ChallengesList";

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

const ChallengeInProgress = ({ challenges }) => {
  const inProgress = challenges.filter(
    (challenge) => challenge.status === "inProgress"
  );

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ margin: "1%" }}>Wyzwania w trakcie realizacji</h1>
      {inProgress.length > 0 ? (
        <div className={styles.card_list}>
          {inProgress.map((challenge) => (
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
      ) : (
        <div className={styles.challenge_card_info}>
          <Link to="/challenges">
            <img
              src={trophy}
              style={{
                width: "15%",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <h2 style={{ display: "block" }}>
              Nie masz aktualnie zadnych wyzwań
            </h2>
            <p
              style={{ color: "#0098C9", fontWeight: "bold", display: "block" }}
            >
              Kliknij aby dodać nowe!
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChallengeInProgress;
