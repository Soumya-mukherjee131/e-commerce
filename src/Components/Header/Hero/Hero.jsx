import React, { useRef, useState } from 'react';
import './Hero.css'
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from '../../../Assests/Images/online5.jpg'
import slide_image_2 from '../../../Assests/Images/online6.jpg'
import slide_image_3 from '../../../Assests/Images/online7.jpg'
import slide_image_4 from '../../../Assests/Images/slider4.jpg'
import slide_image_5 from '../../../Assests/Images/slider5.jpg'
import slide_image_6 from '../../../Assests/Images/img6.png'
import slide_image_7 from '../../../Assests/Images/img5.png'
import slide_image_8 from '../../../Assests/Images/online3.jpg'
import slide_image_9 from '../../../Assests/Images/online4.jpg'


const Hero = () => {
  return (
    <>
    <div className="main">
        <div className="part1">
            <div className="texts">
             <h2 className="main-heading">Discover Amazing Pre-Owned Treasures Today</h2>
             <div className="typewriter">
             <span>Sell your old </span>
             <Typewriter
                    options={{
                        strings: [ "Clothes", "Accessories", "Phones", "Laptops"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
                </div>
                <div className="sub-text">
                    <p>Explore our curated selection of pre-owned items, from stylish clothing to cutting-edge electronics. Start your journey of buying or selling with us and embrace sustainable shopping.</p>
                </div>
                <div className="herobtn">
                    <Button>Shop</Button>
                    <Button>Sell</Button>
                </div>
            </div>
        </div>
        <div className="part2">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    </>
  )
}

export default Hero
