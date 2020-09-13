import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styles from './ChartsStyle.module.css'

const ChartPie = () => (
  <section className={styles.chart__content}>
    <header>
      <h3>Twój cel:</h3>
      <p className={styles.chart__paragraph} >Chudnięcie</p>
    </header>
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#0098c9',
        '40%': '#0098c9',
        '100%': '#87d068',
      }}
      strokeWidth={8}
      percent={70}
      className={styles.chart__pie}
    />
  </section>
);

export default ChartPie;
