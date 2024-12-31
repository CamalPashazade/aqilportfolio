import React from 'react'
import styles from './banner.module.css'

const Banner = ({img}) => {
  return (
    <div className={styles.banner}>
      <img src={img} alt="banner" />
    </div>
  )
}

export default Banner
