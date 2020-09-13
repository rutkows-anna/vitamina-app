import React from 'react';
import styles from './Diary.module.css';
import DiaryCard from './DiaryCartd';

const DiaryItemCard = ({ posts, postFilter, onDelete }) => {
    const filterData = ({ title, date }) => {
      const textFilter = title.toLowerCase().includes(postFilter.toLowerCase());
      const dateFilter = date.includes(postFilter);
      const fillFilter = postFilter.length > 0;

      if (dateFilter) {
        return dateFilter;
      } else if(fillFilter) {
        return textFilter;
      }
    }

  if (posts.length === 0) {
    return (<div className={styles.diary__post__content} style={{ paddingLeft: '3%' }}>
      <h3>Jak się dziś czujesz?</h3>
      <p>To mieisce na Twoje przemyślenia i doznania, których doświadczasz na codzień...</p>
    </div>)
  }

  const filteredPosts = posts.filter(filterData);

  if (filteredPosts.length === 0 && postFilter.length > 0) {
    return (
      <p>"Nie znaleziono wpisow"</p>
    )
  }

  return (
    <>
      {
            filteredPosts
              .reverse()
              .map(post => {
                return (
                  <DiaryCard
                    key={post.id}
                    id={post.id}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    onDelete={onDelete}
                  />
                )
              })
      }
    </>
  );
}

export default DiaryItemCard;