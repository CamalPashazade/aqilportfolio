

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";

import styles from './contact.module.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a7prtxf', 'template_8cthx3q', form.current, {
        publicKey: 't5NZ4sGEr5QRQHT2L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

<div className={styles.contact}>

    <div className={styles.address}>
        <div className={styles.items}>
        <IoLocationOutline size={20} color='#b14930'/>
            <h3>Address</h3>
            <p> Brooklyn New York  </p>
        </div>

        <div className={styles.items}>
        <CiPhone  size={20} color='#b14930'/>
            <h3>Contact number:</h3>
            <p>+1737 207-2013 </p>
        </div>
        <div className={styles.items}>
        <SlEnvolopeLetter  size={20} color='#b14930'/>
            <h3>Email us:</h3>
            <p>aqil.suleymanov92@gmail.com </p>
        </div>

    </div>



<div className={styles.form}>
<form ref={form} onSubmit={sendEmail} >
 <div className={styles.inputs}>
     <div className={styles.labelinput}>
     <label >Name</label>
     <input type="text" name="from_name" />
     </div>

     <div className={styles.labelinput}>
     <label>Email</label>
     <input type="email" name="from_email" />
     </div>
   
 </div>
     <div className={styles.textarea}>
     <label>Message</label>
     <textarea name="message" />
     </div>
      <input type="submit" value="Send Me Message" />
    </form>
</div>





</div>

  );
};


export default Contact