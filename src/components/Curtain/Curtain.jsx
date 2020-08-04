import React, { useRef, useEffect } from 'react'
import styles from './Curtain.module.css'
import {TweenMax, Power3} from 'gsap';
const Curtain = () => {
    let curtain1 = useRef(null);
    let curtain2 = useRef(null);
    let curtain3 = useRef(null);

    useEffect(() => {
        TweenMax.staggerTo([curtain1, curtain2, curtain3], 2, {
            opacity: .5,
            top: "-110%",
            ease: Power3.easeOut
        }, .2)
    }, [])
    return (
        <div>
            <div className={styles.curtain} ref={e => curtain1 = e}></div>
            <div className={styles.curtain} ref={e => curtain2 = e}></div>
            <div className={styles.curtain} ref={e => curtain3 = e}></div>
        </div>
    )
}

export default Curtain
