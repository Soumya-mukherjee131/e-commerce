import React from 'react'
import styles from './FourthSection.module.css';
import img from '../../../Assests/Images/section5.png'
import logo from '../../../Assests/Images/logo1.png'
import { FaAngleRight } from "react-icons/fa6";
const FourthSection = () => {
  return (
    <>
        <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part2}>
              <img src={img} alt="image section 2" />
            </div>
            <div className={styles.part1}>
              <p>Rentals</p>
              <h4>Explore Our Existing Rental</h4>
              <h4>Options Today</h4>
              <p className='mb-1'>Discover a range of rental items tailored to your needs. Enjoy flexible pricing </p>
               <p> and convenient duration options for all your rental requirements.</p>
              <div className={styles.cards}>
                <div className={styles.cards1}>
                  <img src={logo} alt="logo" />
                  <h5>Rental Items</h5>
                  <p>Browse our extensive selection of items available for rent at competitive prices.</p>
                </div>
                <div className={styles.cards2}>
                  <img src={logo} alt="logo" />
                  <h5>List Rentals</h5>
                  <p>Browse our extensive selection of items available for rent at competitive prices.</p>
                </div>
              </div>
              <div className={styles.btn}>
                <button className={styles.btn1}>Browse</button>
                <button className={styles.btn2}>List <FaAngleRight /></button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FourthSection
