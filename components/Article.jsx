import React from 'react'
import styles from '../styles/Article.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function() {
    return(
    <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
            <h3>Un titre</h3>
            <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div>
            <h4 style= {{textAlign: 'right'}}>An auteur</h4>
            <div className={styles.divider}></div>
            <img src="./articleImg.png" alt="une photo" width={400} height={224} />
            <p>Une déscription</p>
        </div>
        </div>
    )
}