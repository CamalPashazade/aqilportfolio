
import styles from './home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay,EffectFade } from 'swiper/modules';

import React from 'react'
import {swiperimages} from '../../datas/swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Home = () => {
  return (
    <div className={styles.home}>

<Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay,EffectFade]}
      effect="fade"
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
   autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={styles.swiper}
    >

      {
        swiperimages.map((item) =>(
      <SwiperSlide key={item.id} className={styles.swiperslide}><img src={item.img} alt="" /></SwiperSlide>

        ))
      }
    
    
    </Swiper>
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
    </div>
  )
}

export default Home
