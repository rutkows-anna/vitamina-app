import React from "react";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import {
  fetchChallenges,
  changeStatusOnDone,
  changeStatusOnProgress,
} from "../state/challenges";
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

class ChallengeDescription extends React.Component {
  componentDidMount() {
    this.props.fetchChallenges();
  }

  handleFinished = (itemId) => {
    let data = {};
    this.props.challenges.map((challenge) => {
      if (challenge.id === itemId) {
        data = {
          category: challenge.category,
          description: challenge.description,
          id: challenge.id,
          img: challenge.img,
          title: challenge.title,
          status: "isDone",
        };
      }
      return challenge;
    });
    this.props.changeStatusOnDone(itemId, data);
  };

  handleInProgress = (itemId) => {
    let data = {};
    this.props.challenges.map((challenge) => {
      if (challenge.id === itemId) {
        data = {
          category: challenge.category,
          description: challenge.description,
          id: challenge.id,
          img: challenge.img,
          title: challenge.title,
          status: "inProgress",
        };
      }
      return challenge;
    });
    this.props.changeStatusOnProgress(itemId, data);
  };

  render() {
    return (
      <div>
        {this.props.challenges
          .filter((challenge) => challenge.id === this.props.match.params.id)
          .map((challenge) => (
            <div
              key={challenge.id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 900,
                marginLeft: "auto",
                marginRight: "auto",
                alignContent: "center",
              }}
            >
              <img
                style={{
                  width: "80%",
                  height: "300px",
                  objectFit: "cover",
                  boxShadow: "3px 3px 5px #aaaaaa",
                }}
                src={getImage(challenge.img)}
              />
              <h1>{challenge.title}</h1>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis voluptatem blanditiis ullam nisi ea animi excepturi
                tempora facere, adipisci assumenda necessitatibus nulla aut
                consectetur sunt dolorem ipsum enim nam facilis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veniam expedita
                incidunt, quos provident ex mollitia eaque dolore molestiae
                praesentium laboriosam similique temporibus fugit! Velit dolor,
                harum voluptate excepturi est ratione!
              </article>
              {challenge.status === "inProgress" ? (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#364954",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: "8px",
                    marginTop: 25,
                  }}
                  onClick={() => this.handleFinished(challenge.id)}
                >
                  Zakończ
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#0098C9",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: "8px",
                    marginTop: 25,
                  }}
                  onClick={() => this.handleInProgress(challenge.id)}
                >
                  Podejmij się!
                </Button>
              )}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  challenges: state.challenges.data,
});
const mapDispatchProps = {
  fetchChallenges,
  changeStatusOnDone,
  changeStatusOnProgress,
};

export default connect(mapStateProps, mapDispatchProps)(ChallengeDescription);
