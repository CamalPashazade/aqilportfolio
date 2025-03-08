import React from 'react'
import styles from './nav.module.css'
import { Link, useLocation } from 'react-router-dom'
import {nav} from '../../datas/navigation.js'


const Navigation = () => {

    const location = useLocation();

  return (
    <nav className={styles.nav}>

<div style={{display:"flex",alignItems:"center"}}>
<h2><Link className={styles.link} to={'/'}>Aqil Suleymanov</Link></h2>
{/* <Link className={styles.link} to={'/'}><img src="/src/assets/AS.webp" className={styles.logo} alt="" /></Link> */}

</div>


<div className={styles.links}>

    {nav.map((item) => 
    {
        return <Link className={location.pathname === item.path ? styles.active : styles.link_path} key={item.id} to={item.path}>{item.title}</Link>
    })}
 


</div>


    </nav>
  )
}

export default Navigation
