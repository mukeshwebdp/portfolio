import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css'
function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className= {styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive  and optimizied sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className= {styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and optimised back-end system and APIs
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About;