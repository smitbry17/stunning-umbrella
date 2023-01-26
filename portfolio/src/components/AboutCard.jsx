import React from 'react'
import styles from '../index.module.css'
import img from '../images/aboutImage.JPG'
import '../App.css'

function AboutCard() {
  return (
<div className={styles.imgContainer}>
    <img src={img} alt="..." className={styles.img}/>
  </div>
  )
}

export default AboutCard