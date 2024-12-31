import React from 'react'
import styles from './about.module.css'
import Banner from '../../components/banner/Banner'
import {experience_education} from './../../datas/experience'

const About = () => {
  return (
    <div className={styles.about}>

      <Banner img='/src/assets/mugam6.jpg'/>
    

    <div className={styles.aboutme}>
      <img src="/src/assets/aqik.jpg" alt="" />


      <p>Aqil Suleymanov is an Azerbaijani Mugham performer who has been promoting this traditional music genre in the United States for over seven years. His journey began in 2014 when he visited the U.S. with the "Qarabagh Ensemble" to participate in the SXSW music festival.  Since then, he has made a significant impact on the American music scene as a solo performer. 

In Texas, Aqil performed as a soloist with the Bereket Middle Eastern Ensemble at the University of Texas at Austin, introducing Mugham to new audiences. After four years, he relocated to New York, where he continued his mission of promoting Azerbaijani music. Notably, he collaborated with professors at Hunter College to organize a Mugham program, aiming to educate students about this ancient art form. 

Aqil's dedication has earned him recognition, including winning both the Golden Award for "Best Male Singer" and the Silver Award for "Best Folk Music" at the LIT Music Awards. 

He continues to perform and teach across the U.S., with recent concerts in Minnesota and upcoming master classes at Brandeis University. His efforts play a crucial role in promoting Azerbaijani Mugham on the global stage.</p>

    </div>





    <div className={styles.education}>

      <h1>Education & Experience</h1>


<div className={styles.experience}>

  {experience_education.map((item) => (
    <div key={item.id} className={styles.container}>

      <div className={styles.left}>
      <hr className={styles.leftborder} />
      <span> {item.duration}</span>
      </div>
   
        <h5>{item.title}</h5>
        <p>{item.description}</p>
    </div>
  ))}

</div>


    </div>

    </div>
  )
}

export default About
