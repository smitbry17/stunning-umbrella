import React from 'react'
import styles from '../index.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.links}>
            <span id={styles.aboutme}>About Me</span>
            <span id= {styles.portfolio}>Portfolio</span>
            <span id={styles.contact}>Contact</span>
            <span id={styles.skills}>Skills</span>
        </div>
    </div>
  )
}

export default Navbar