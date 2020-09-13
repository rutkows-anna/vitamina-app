import React from 'react';
import DiaryChart from "./DiaryChart";
import ButtonAdd from "./ButtonAdd";
import SearchAppBar from './SearchAppBar';
import DiaryItemCard from './DiaryItemCard';
import styles from './Diary.module.css';


const DiaryDashboard = ({ posts, postFilter, onDelete, onKeyUpSearch, onClickToForm, data}) => (
  <section className={styles.diary__section}>
    <h1 className={styles.diary__header__title}>Twój dziennik nastrojów:</h1>
    <header className={styles.diary__header}>
      <DiaryChart data={data}/>
      <ButtonAdd onClickToForm={onClickToForm}/>
    </header>
      <SearchAppBar onKeyUpSearch={onKeyUpSearch} />
      <DiaryItemCard
        posts={posts}
        postFilter={postFilter}
        onDelete={onDelete}
      />
  </section>
);

export default DiaryDashboard;