import React from 'react'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { DateTime } from 'luxon'


export default function Header (){
    const date = DateTime.now().toFormat('MMMM dd yyyy')

    return (
        <header className={styles.monHeader}>
            <div className={styles.headerContainer}>
                <div>{date}</div>
                <h1 className={styles.titreMynews}>My News</h1>
                <FontAwesomeIcon icon= {faUser} className={styles.userIcon}/>
            </div>
            <nav className={styles.navig}>
                <a href="" className={styles.link}>Articles</a>
                <a href=""className={styles.link}>Bookmarks</a>
            </nav>
        </header>
    )
}; 