import React from 'react'
import styles from './FirstSection.module.css';
import logo1 from '../../../Assests/Images/logo1.png'
import { FaAngleRight } from "react-icons/fa6";
const FirstSection = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
                <p className={styles.heading}>Explore</p>
                <h2 className={styles.heading1}>Discover Our Diverse Product</h2>
                <h2 className={styles.heading2}>Categories</h2>
                <p className={styles.para1}>Navigate effortlessly through our extensive range of categories. From fashion to electronics,</p>
                <p className={styles.para2}>find exactly what you need.</p>
            </div>
            <div className={styles.part2}>
                <div className={styles.cards}>
                    <div className={styles.red} >
                        <img src={logo1} alt="logo" className={styles.logo1}/>
                        <h4 className={styles.heading3}>Shop by Category for Easy</h4>
                        <h4 className={styles.heading4}>Browsing</h4>
                        <p className={styles.para3}>Choose from Clothing, Shoes, Accessories, Phones, Laptops </p>
                        <p className={styles.para4}>and more.</p>
                    </div>
                    <div className={styles.blue}>
                    <img src={logo1} alt="logo" className={styles.logo1}/>
                        <h4 className={styles.heading3}>Engaging Icons for Each </h4>
                        <h4 className={styles.heading4}>Product Category</h4>
                        <p className={styles.para3}>Each category features vibrant icons for quick</p>
                        <p className={styles.para4}>identification.</p>
                    </div>
                    <div className={styles.green} >
                        <img src={logo1} alt="logo" className={styles.logo1}/>
                        <h4 className={styles.heading3}>Find What You Love, Fast </h4>
                        <h4 className={styles.heading4}>and Easy</h4>
                        <p className={styles.para3}>Our intuitive layout ensures a seamless shopping.</p>
                        <p className={styles.para4}>experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.part3}>
                <button className={styles.btn1}>Browse</button>
                <button className={styles.btn2}>Shop <FaAngleRight /></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FirstSection
