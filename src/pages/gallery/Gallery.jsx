import styles from './gallery.module.css';
import React, { useState, useEffect } from 'react';
import { galleryImages } from '../../datas/gallery';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { swiperimages } from '../../datas/swiper';

const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [enableNavigation, setEnableNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const enterFullscreen = (event) => {
    setCurrentImage(event.target.src);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    setCurrentImage(null);
    document.body.style.overflow = ""; // Enable scrolling
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>

        {isMobile ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
              effect="fade"
              loop={true} 
              slidesPerView={1}
              navigation={enableNavigation ? {
                nextEl: `.${styles.customNextButton}`,
                prevEl: `.${styles.customPrevButton}`,
              } : false}
              autoplay={{ delay: 3000 }}
              className={styles.swiper}
            >
              {galleryImages.map((item) => (
                <SwiperSlide key={item.id} className={styles.swiperslide}>
                  <img src={item.img} alt={`Slide ${item.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>

   {/*          {enableNavigation && (
              <>
                <div className={styles.customPrevButton} ><FaArrowLeft size={20} /></div>
                <div ><FaArrowRight className={styles.customNextButton } size={20} /></div>
              </>
            )} */}
          </>
        ) : (
          galleryImages.map((item) => (
            <div key={item.id}>
              <img
                onClick={enterFullscreen}
                src={item.img}
                alt={`Image ${item.id}`}
                className={styles.image}
              />
            </div>
          ))
        )}

      </div>

      {isFullscreen && (
        <div className={styles.fullscreenOverlay} onClick={exitFullscreen}>
          <img src={currentImage} className={styles.fullscreenImage} alt="Fullscreen" />
          <button className={styles.closeButton} onClick={exitFullscreen}>X</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
