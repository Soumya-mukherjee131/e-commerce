import React from 'react'
import styles from './FifthSection.module.css'
import img1 from '../../../Assests/Images/slider1.png'
import img2 from '../../../Assests/Images/slider2.png'
import img3 from '../../../Assests/Images/slider3.png'
import logo from '../../../Assests/Images/authorlogo.png'
const FifthSection = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
                <p>Featured</p>
                <h1>Explore Our Featured Articles</h1>
                <p>Discover tips for sustainable selling and renting.</p>
                
            </div>
            <div className={styles.part2}>
                <button>View All</button>
                <button>Sustainability Tips</button>
                <button>Styling Advice</button>
                <button>Maximize Earnings</button>
                <button>Rental Insights</button>
            </div>
            <div className={styles.part3}>
                <div class={styles.onediv}>
                    <img src={img1} alt="" />
                    <p>Guide</p>
                    <h4>How to Sell Your Pre-Owned Items</h4>
                    <p>Learn effective strategies to sell your items quickly and profitably.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img2} alt="" />
                    <p>Advice</p>
                    <h4>Styling Tips for Your Wardrobe</h4>
                    <p>Elevate your style with these essential fashion tips and tricks.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img3} alt="" />
                    <p>Earnings</p>
                    <h4>Maximizing Your Selling Potential</h4>
                    <p>Unlock the secrets to getting the best price for your items.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img3} alt="" />
                    <p>Products</p>
                    <h4>Choose the best product for yourself</h4>
                    <p>Learn to give gifts, home decorations and more about choice.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.part4}>
                <div class={styles.onediv}>
                    <img src={img1} alt="" />
                    <p>Rental</p>
                    <h4>Understanding Rental Pricing Strategies</h4>
                    <p>Learn how to price your rental items competitively and attractively.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img2} alt="" />
                    <p>Sustainability</p>
                    <h4>The Importance of Sustainable Fashion</h4>
                    <p>Explore why sustainable fashion is crucial for our planet's future.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img3} alt="" />
                    <p>Trends</p>
                    <h4>Current Trends in Pre-Owned Fashion</h4>
                    <p>Stay updated on the latest trends in the pre-owned fashion market.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
                <div class={styles.onediv}>
                    <img src={img3} alt="" />
                    <p>Fashion</p>
                    <h4>See the fashion for your own style</h4>
                    <p>Learn about the fashions for office, movie, tour in different locations.</p>
                    <div className={styles.author}>
                    <img src={logo} alt="" />
                    <div>
                        <p>Author Name</p>
                        <p>TIme and date</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default FifthSection
