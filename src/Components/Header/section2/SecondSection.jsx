import React from 'react'
import styles from './SecondSection.module.css'
import img from '../../../Assests/Images/section2.jpg'
import logo from '../../../Assests/Images/logo1.png'
import { FaAngleRight } from "react-icons/fa6";

const SecondSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
              <p>Discover</p>
              <h4>Explore Our Latest Popular </h4>
              <h4>Products</h4>
              <p>Browse our curated selection of popular and new items. Find great deals on pre-owned treasures that fit your style.</p>
              <div className={styles.cards}>
                <div className={styles.cards1}>
                  <img src={logo} alt="logo" />
                  <h5>New Arrivals</h5>
                  <p>Check out the latest additions to our collection and grab them before they're gone!</p>
                </div>
                <div className={styles.cards2}>
                  <img src={logo} alt="logo" />
                  <h5>Best Sellers</h5>
                  <p>Shop our most popular items loved by our community of buyers and sellers.</p>
                </div>
              </div>
              <div className={styles.btn}>
                <button className={styles.btn1}>View</button>
                <button className={styles.btn2}>Quick View <FaAngleRight /></button>
              </div>
            </div>
            <div className={styles.part2}>
              <img src={img} alt="image section 2" />
            </div>
          </div>
        </div>
    </>
  )
}

export default SecondSection
