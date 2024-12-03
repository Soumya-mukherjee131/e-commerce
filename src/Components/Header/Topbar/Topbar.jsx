import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from './Topbar.module.css';
import LocationDrop from '../../LocationDrop/LocationDrop';
import logo from '../../../Assests/Images/logo.png';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Topbar = () => {
  return (
    <>
      <nav className={styles.topbar}>
        <div className={styles.main}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <img src={logo} alt="logo" className={styles.logo} />
            <LocationDrop />
          </div>

          {/* Search Section */}
          <div className={styles.searchSection}>
            <div className={styles.searchbar}>
              <input type="text" placeholder="Search for products..." />
              <Button className={styles.searchButton}>
                <IoIosSearch />
              </Button>
            </div>
          </div>

          {/* Icons Section */}
          <div className={styles.iconsSection}>
            <Button className={styles.circle}><FaRegUser /></Button>
            <Button className={styles.circle}><IoCartOutline /></Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
