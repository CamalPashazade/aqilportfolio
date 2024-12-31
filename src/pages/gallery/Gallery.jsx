import styles from './gallery.module.css';
import React, { useState } from 'react';
import { galleryImages } from '../../datas/gallery';

const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false); // State to track fullscreen mode
  const [currentImage, setCurrentImage] = useState(null); // State to track the currently fullscreen image

  const enterFullscreen = (event) => {
    const imgElement = event.target;
    setCurrentImage(imgElement); // Store the current image
    setIsFullscreen(true); // Set fullscreen state

    if (imgElement.requestFullscreen) {
      imgElement.requestFullscreen();
    } else if (imgElement.webkitRequestFullscreen) { // For Safari
      imgElement.webkitRequestFullscreen();
    } else if (imgElement.mozRequestFullScreen) { // For Firefox
      imgElement.mozRequestFullScreen();
    } else if (imgElement.msRequestFullscreen) { // For IE/Edge
      imgElement.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    setIsFullscreen(false); // Exit fullscreen state
    setCurrentImage(null); // Clear the current image

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // For Safari
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) { // For Firefox
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) { // For IE/Edge
      document.msExitFullscreen();
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {galleryImages.map((item) => (
          <img 
            key={item.id} 
            onClick={enterFullscreen} 
            src={item.img} 
            alt="" 
            className={styles.image}
          />
        ))}
      </div>

      {isFullscreen && (
        <button 
          className={styles.closeButton} 
          onClick={exitFullscreen}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Gallery;
