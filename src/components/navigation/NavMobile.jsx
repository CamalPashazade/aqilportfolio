import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import styles from './nav.module.css';
import { nav } from '../../datas/navigation.js';
import { Link, useLocation } from 'react-router-dom';

const NavMobile = () => {
  const [openNav, setOpenNav] = useState(false);
  
  const location = useLocation();


  useEffect(() => {
    setOpenNav(false);
    document.body.style.overflow = 'auto'; 
  }, [location]);

  
  const handleNavChange = () => {
    setOpenNav(!openNav);
    if (!openNav) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };

  return (
    <div className={styles.navmobile}>
      <h2>
        <Link className={styles.mobilelink} to={'/'}>
          Aqil Suleymanov
        </Link>
      </h2>

  
      {openNav ? (
        <HiX size={25} className={styles.x} onClick={handleNavChange} />
      ) : (
        <GiHamburgerMenu size={25} className={styles.hamburger} onClick={handleNavChange} />
      )}
     


      <div className={`${styles.mobilemenu} ${openNav ? styles.active : ''}`}>
      <div className={styles.container}>
        {nav.map((item) => (

     
    <Link
            className={styles.mobilelink_path}
            key={item.id}
            to={item.path}
            onClick={() => setOpenNav(false)} 
          >
            {item.title}
          </Link>
      
        ))}
          </div>

      </div>
    </div>
  );
};

export default NavMobile;
