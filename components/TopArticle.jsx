import React from 'react'
import styles from '../styles/TopArticle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function TopArticle() {
    return (<>
        <section className={styles.topContainer}>
            <img src="./articleImg.png" alt="building" className={styles.imgTop} width={700} height={400}/>
            <div className={styles.topText}>
                <h2>Un Titre</h2>
                <FontAwesomeIcon icon= {faBookmark} className={styles.bookmarkIcon}/>
                <h4>Un auteur</h4>
                <p>Une descritpion</p>
            </div>
        </section>
    </>)
}