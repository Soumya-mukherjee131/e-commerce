import React from 'react'
import styles from './Footer.module.css'
import logo from '../../Assests/Images/logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part1}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.items}>
                    <ul>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Blog and Updates</a></li>
                    </ul>
                </div>
                <div className={styles.media}> 
                    <ul>
                    <li><a href="/"><FaLinkedin /></a></li>
                    <li><a href="/"><FaYoutube /></a></li>
                    <li><a href="/"><FaSquareXTwitter /></a></li>
                    <li><a href="/"><FaInstagramSquare /></a></li>
                    <li><a href="/"><FaFacebook /></a></li>
                    </ul>
                </div>

            </div>
            <div className={styles.part2}>
                <ul>
                    <li>© 2024 eshop. All rights reserved.</li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies Settings</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
