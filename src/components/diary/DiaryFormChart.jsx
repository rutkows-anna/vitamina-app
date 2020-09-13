import React from 'react';
import styles from './DiaryFormChart.module.css';
import { AiOutlineFrown,  AiOutlineMeh,  AiOutlineSmile } from "react-icons/ai";

class DiaryFormChart extends React.Component {

  handleChange = (e) => {
    const value = Math.ceil(e.target.value / 10);
    this.props.onChangeInForm(value);
  }

  render() {
    return (
      <div className={styles.chart__box}>
        <input
          type='range'
          min='1'
          value={this.props.value}
          onChange={this.handleChange}
          className={styles.chart__range}
        />
        <div className={styles.chart__emots}>
          <AiOutlineFrown />
          <AiOutlineMeh />
          <AiOutlineSmile />
        </div>
      </div>
    );
  }
}

export default DiaryFormChart;
