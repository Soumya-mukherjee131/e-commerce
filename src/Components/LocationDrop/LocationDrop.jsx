import React, { useContext, useState, useEffect } from 'react';
import { FaAnglesDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from 'react-icons/io';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import styles from './LocationDrop.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LocationDrop = () => {
  const context = useContext(MyContext);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [country, setCountry] = useState('India');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const selectCountry = (index) => {
    const selectedCountry = countryList[index]?.country;
    setSelectedTab(index);
    setCountry(selectedCountry);
    setOpenModal(false);
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredList = context.countryList.filter((item) =>
      item.country.toLowerCase().includes(keyword)
    );
    setCountryList(filteredList);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Open Modal Button */}
      <Button className={styles.countryDropdown} onClick={() => setOpenModal(true)}>
        <div className={styles.info}>
          <span className={styles.label}>Your Location</span>
          <span className={styles.name} onClick={toggleDropdown}>
            {country.length > 8 ?country.slice(0, 5) + '...' : country}
          </span>
        </div>
        <span className={styles.mlAuto}><FaAnglesDown /></span>
      </Button>

      {/* Modal Dialog */}
      <Dialog open={openModal} className={styles.locationModal} onClose={() => setOpenModal(false)} TransitionComponent={Transition}>
        <h4 className={styles.modalTitle}>Choose Your Delivery Location</h4>
        <p className={styles.modalText}>Enter your address and we will specify the offer for your area</p>

        {/* Close Button */}
        <Button className={styles.close} onClick={() => setOpenModal(false)}>
          <IoMdClose />
        </Button>
        
        {/* Search Bar */}
        <div className={styles.headerSearch}>
          <input type="text" placeholder="Search for area..." onChange={filterList} />
          <Button><IoIosSearch /></Button>
        </div>
        
        {/* Country List */}
        <ul className={styles.countryList}>
          {countryList?.length !== 0 && countryList.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <Button
                className={selectedTab === index ? styles.active : ''}
                onClick={() => selectCountry(index)}
              >
                {item.country}
              </Button>
              <div className={styles.deliveryCharge}>Delivery Charge $5.55</div>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default LocationDrop;
