import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { DATABASE_URL } from '../../index'

import styles from './Diary.module.css';

const DiaryCard = ({ id, title, date, description, onDelete }) => {
  const handleOnClickDelete = () => {
    fetch(`${DATABASE_URL}/diary/${id}.json`, {
      method: 'DELETE'
    }).then(() => onDelete());
  }

  return (
    <div className={styles.diary__post__box}>
      <div className={styles.diary__post__content}>
        <h3 className={styles.post__title}>{title}</h3>
        <span className={styles.post__date}>{date}</span>
        <p>{description}</p>
      </div>
        <Button
          id={id}
          className={styles.diary__post__button__delete}
          onClick={handleOnClickDelete}>
            <DeleteIcon />
        </Button>
    </div>
  );
}

export default DiaryCard;