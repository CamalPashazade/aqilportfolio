


import React from 'react'
import styles from './layout.module.css'
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import NavMobile from '../navigation/NavMobile';
import { Outlet } from 'react-router-dom';


const Layout = ({ children }) => {

    // console.log('Rendering Layout...');
    // console.log('Children:', children);
    return (
      <div>
     
      
      <Navigation/>
      <NavMobile/>
          <main className={styles.layout}>
            {children}
            <Outlet /> 
          </main>
         
      <Footer/>

        </div>
    
    );
  };
  
  export default Layout;
