import React from "react";
import { connect } from "react-redux";
import { fetchChallenges, changeStatusOnProgress } from "../state/challenges";

import styles from "./Challenges.module.css";
import ChallengesList from "./ChallengesList";
import SearchBar from "./SearchBar";
import firebase from "firebase";

class Challenges extends React.Component {
  state = {
    filterText: "",
  };

  handleOnProgress = (itemId, data) => {
    // const user = firebase.auth().currentUser.email;
    this.props.changeStatusOnProgress(itemId, data);
  };

  handleFilterChange = (text) => {
    this.setState({
      filterText: text,
    });
  };

  componentDidMount() {
    this.props.fetchChallenges();
  }

  render() {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Wyzwania </h1>
        <SearchBar onFilterChange={this.handleFilterChange} />
        <ChallengesList
          challenges={this.props.challenges}
          filter={this.state.filterText}
        />
      </section>
    );
  }
}

const mapStateProps = (state) => ({
  challenges: state.challenges.data,
});

const mapDispatchProps = {
  fetchChallenges,
  changeStatusOnProgress,
};

export default connect(mapStateProps, mapDispatchProps)(Challenges);
