import React from 'react';
import ChartPie from './ChartPie';
import ChartLine from './ChartLine';
import styles from './Dashboard.module.css';
import ChallengesList from '../ChallengesList';
import ChallengeInProgress from "../ChallengeInProgress";
import ChallengeFinished from "../ChallengeFinished";

import { connect } from "react-redux";
import { fetchChallenges, changeStatusOnProgress } from "../../state/challenges";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchChallenges();
  }

  isDoneChallenges = () => this.props.challenges.filter(challenge => challenge.status === 'isDone');

  inProgressChallenges = () => this.props.challenges.filter(challenge => challenge.status === 'inProgress');

  handleOnProgress = (itemId, data) => this.props.changeStatusOnProgress(itemId, data);


  render() {
    return (
        <section className={styles.chart__section}>
          <div className={styles.chart__box}>
            <h1 className={styles.chart__box__header}>Twoje postępy</h1>
            <ChartPie />
          </div>
          <div className={styles.chart__box}>
            <h2 className={styles.chart__box__header}>Poziom wytrwałości</h2>
            <ChartLine />
          </div>
          <div style={{textAlign: 'left'}}>
            <ChallengeInProgress challenges={this.props.challenges} />
            <h2 style={{margin: '1%'}}>Twoje wyzwania na dziś</h2>
            <ChallengesList
              challenges={this.props.challenges}
              inProgress={this.handleOnProgress}
            />
            <h2 style={{margin: '1%'}}>Wyzwania zakończone</h2>
            <ChallengesList challenges={this.isDoneChallenges()} />
          </div>
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

export default connect(mapStateProps, mapDispatchProps)(Dashboard);
