
import styles from './gallery.module.css'

import React from 'react'
import {galleryImages} from '../../datas/gallery'

const Gallery = () => {
  return (
    <div className={styles.gallery}>

<div className={styles.container}>

{
    galleryImages.map((item) => 
    (
        <img key={item.id} src={item.img} alt="" />

    ))
}
   


    </div>
      
    </div>
  )
}

export default Gallery
