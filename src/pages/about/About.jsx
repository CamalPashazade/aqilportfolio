import React from 'react'
import styles from './about.module.css'
import Banner from '../../components/banner/Banner'
import {experience_education} from './../../datas/experience'

const About = () => {
  return (
    <div className={styles.about}>

      <div className={styles.banner}>
      {/* <Banner img='/aqilportfolio/src/assets/mugam6.jpg'/> */}
      <Banner img='/src/assets/mugam6.jpg'/>


      </div>

    
      <div className={styles.aboutme}>
       
       <div className={styles.image}>
       {/* <img src="/aqilportfolio/src/assets/aqilimages/photo_2025-02-23_20-24-41.jpg" alt="" /> */}
       <img src="/src/assets/aqilimages/photo_2025-02-23_20-24-41.jpg" alt="" />

       </div>

<div className={styles.ul}>
  
  <ul type='none'>
    <li>Agil Suleymanov, an Azerbaijani mugham performer, has been living in the United States for more than seven years and is busy promoting Azerbaijani mugham. His visit to the United States began in 2014 to participate in the SXSW music festival with the Karabakh Ensemble. This trip marked the beginning of his solo career in the American music scene.</li>
    <li>While in Texas, Agil began introducing mugham to American audiences, performing as a soloist with the Bereket Middle Eastern Ensemble on the University of Texas Austin campus. After living in Austin for four years, he moved to New York, where he had a larger and more diverse audience. Currently, Agil is the only mugham performer living in the United States, and he takes this responsibility with great pleasure.</li>
    <li>In New York, Agil is involved in organizing a mugham program in collaboration with Professor George Moorer of Hunter College. This project contributes to the promotion of Azerbaijani music in the academic field.</li>
    <li>In recent years, Agil Suleymanov has been awarded a number of international awards. He won the Gold Award in the 'Best Male Singer' category and the Silver Award in the 'Best Folk Music' category at the LIT Music Awards. In addition, he was awarded first place in the National Music Vocal category and second place in the Professional category at the UK International Music Competition. In the Vivaldi International Music Competition, he won first place in the Professional and National Music Vocal categories.</li>
    <li>Agil Suleymanov also gives mugham master classes and concerts at various universities in the United States. He has taught master classes at Brandeis University and performed in a concert program in Minnesota. Future plans include concert tours at US universities with the Karabakh Ensemble.</li>
    <li>Agil Suleymanov's activity makes an important contribution to the recognition and promotion of Azerbaijani mugham at the international level.</li>
  </ul>
</div>
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
          {item.description && <p>{item.description}</p>}  
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default About
