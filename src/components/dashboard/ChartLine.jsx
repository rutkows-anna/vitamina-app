import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styles from './ChartsStyle.module.css'

const ChartLine = () => (
  <section className={styles.chart__content} style={{flexWrap: 'wrap'}}>
    <header>
      <h3>Następny poziom za:</h3>
      <p className={styles.chart__paragraph} >3 wyzwania</p>
    </header>
    <Progress 
      percent={50} 
      steps={6} 
      strokeColor={'#0098c9'}
    />
  </section>
);

export default ChartLine;

