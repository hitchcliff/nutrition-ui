import React from 'react'
import styles from './Nav.module.css'
import logo from '../../assets/icons/logo.svg'
const Nav = () => {
    return (
        <div className={styles.container}>
            <nav>
                <img src={logo} alt="Food Logo"/>
                <ul className={styles.menu}>
                    <li>
                        <a href="godjs.ga">Home</a>
                    </li>
                    <li>
                        <a href="godjs.ga">About</a>
                    </li>
                    <li>
                        <a href="godjs.ga">Contact</a>
                    </li>
                    <li>
                        <a href="godjs.ga">Shop</a>
                    </li>
                </ul>
                <ul className={styles.menu2}>
                    <li>
                        <a href="godjs.ga" className={styles.order}>Order</a>
                    </li>
                    <li>
                        <a href="godjs.ga" className={styles.login}>Login/Signup</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
    