import React from 'react';
import styles from '../styles/Home.module.css';
import TopArticle from './TopArticle';
import Article from './Article';

export default function Home() {
  const articles = [];

  for (let i = 0; i < 8; i++) {
    articles.push(<Article />);
  }
  return <>
    <div>
      <div>
        <title>My News - Home</title>
      </div>

      <TopArticle />

      <div className={styles.articlesContainer}>{articles}</div>
    </div>

  </>;
}
