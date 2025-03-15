import styles from './home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
import { swiperimages } from '../../datas/swiper';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Home = () => {
  // const [enableNavigation, setEnableNavigation] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setEnableNavigation(window.innerWidth > 576);
  //   };
    
  //   handleResize(); // Set initial state
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className={styles.home}>
   {/*    <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation={enableNavigation ? {
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        } : false}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.swiper}
      >
        {
          swiperimages.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperslide}>
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
      {enableNavigation && (
        <>
          <div className={styles.customPrevButton}><FaArrowLeft /></div>
          <div className={styles.customNextButton}><FaArrowRight /></div>
        </>
      )} */}

<div>

{/* <img src="/src/assets/aqilimages/photo_2025-02-23_20-25-19.jpg" alt="" /> */}
<img src="/assets/aqilimages/photo_2025-02-23_20-25-19.jpg" alt="" />


</div>
      
    </div>
  );
};

export default Home;
