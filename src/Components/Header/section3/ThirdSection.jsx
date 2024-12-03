import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import styles from './ThirdSection.module.css'

const ThirdSection = () => {
    const items = [
        { id: 1, imgSrc: 'https://placehold.co/500x400', title: 'Product 1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 2, imgSrc: 'https://placehold.co/500x400', title: 'Product 2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 3, imgSrc: 'https://placehold.co/500x400', title: 'Product 3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 4, imgSrc: 'https://placehold.co/500x400', title: 'Product 4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 5, imgSrc: 'https://placehold.co/500x400', title: 'Product 5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 6, imgSrc: 'https://placehold.co/500x400', title: 'Product 6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 7, imgSrc: 'https://placehold.co/500x400', title: 'Product 7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
        { id: 8, imgSrc: 'https://placehold.co/500x400', title: 'Product 8', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },  
        { id: 9, imgSrc: 'https://placehold.co/500x400', title: 'Product 9', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, minus!' },
    ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
                <p>Sell</p>
                <h3>List of the Recent Items for Sell</h3>
                <p className='mb-1'>Selling your pre-owned items is simple and rewarding. Follow our easy steps to list your items</p> 
                <p>and connect with buyers today!</p>
            </div>
            <div className={styles.part2}>
                <Swiper
                rewind={true}
                // navigation={true}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                freeMode={true}
                // pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Navigation]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,  // Mobile screens
                      spaceBetween: 10,
                    },
                    425: {
                      slidesPerView: 2,  // Tablets
                      spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,  // Tablets
                        spaceBetween: 20,
                      },
                    1024: {
                      slidesPerView: 4,  // Small desktops
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 4,  // Larger desktops
                      spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 4,  // Larger desktops
                        spaceBetween: 40,
                      },
                    2560: {
                        slidesPerView: 5,  // Larger desktops
                        spaceBetween: 50,
                    },
                }}
                className='mySwiper'>
                {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.imgSrc} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection
