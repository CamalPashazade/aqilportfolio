
import React from 'react'
import styles from './footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={styles.container}>

        <p>Copyright ©2025 All rights reserved </p>

        <h3 className={styles.name}>S.Aqil</h3>


        <div className={styles.social_media}>
          <a href="https://www.facebook.com/aqil.suleymanov.1" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={`${styles.link} ${styles.link_facebook}`} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={`${styles.link} ${styles.link_twitter}`} />
          </a>
          <a href="https://www.instagram.com/aqil.s92/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`${styles.link} ${styles.link_instagram}`} />
          </a>
          <a href="https://www.linkedin.com/in/aqil-suleymanov-7b919b209/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className={`${styles.link} ${styles.link_linkedin}`} />
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
