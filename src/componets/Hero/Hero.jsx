import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mukesh</h1>
        <p className={styles.description}>
        Passionate about MongoDB, Express, React, and Node.js. Excited to start my career. Let's connect!
        </p>
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1NCUDywaNuUBUm6wN8BS9yqCsyVfewV5j&export=download" className={styles.contactBtn}>Resume</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero-Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        
    </section>
  )
}

export default Hero