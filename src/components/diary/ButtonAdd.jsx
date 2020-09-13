import React from 'react';

import styles from './Diary.module.css';


class ButtonAdd extends React.Component {
  handleOnClick = () => {
    this.props.onClickToForm();
  }

  render() {
    return (
      <div className={styles.button} onClick={this.handleOnClick}>
          <span className={styles.button__icon}>+</span>
          <p className={styles.button__content}>Dodaj nową pozycję do dziennika</p>
        </div>
    );
  }
}

export default ButtonAdd;