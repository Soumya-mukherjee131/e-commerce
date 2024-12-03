import React from 'react'
import styles from './NewsLetterSection.module.css'
import img from '../../../Assests/Images/nl.png'

const NewsLetterSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
                <h1>Stay Updated with Our News</h1>
                <p>Subscribe now for exclusive updates and special discounts on our latest offerings!</p>
                <div className={styles.part}>
                    <input type="email" placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
                <p className={styles.para}>By clicking Sign Up, you agree to our Terms and Conditions.</p>
            </div>
            <div className={styles.part2}>
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetterSection
