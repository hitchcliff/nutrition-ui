import React, { useRef, useEffect  } from 'react'
import styles from './Home.module.css'
import {TweenMax, Power3} from 'gsap';

import ShowcaseImage from '../../assets/food.png'
import PlayIcon from '../../assets/icons/play.svg'
import TruckIcon from '../../assets/icons/truck.svg'
import MessageIcon from '../../assets/icons/message.svg'

import Leaves1 from '../../assets/leaves1.png'
import Leaves2 from '../../assets/leaves2.png'
import Leaves3 from '../../assets/leaves3.png'
import Leaves4 from '../../assets/leaves4.png'

import Curtain from '../Curtain/Curtain'
import { Tween } from 'gsap/gsap-core';
const Home = () => {
    let leaf1 = useRef(null)
    let leaf2 = useRef(null)
    let leaf3 = useRef(null)
    let leaf4 = useRef(null)

    let subtitle = useRef(null)
    let heading = useRef(null)
    let buttons = useRef(null)
    let services = useRef(null)
    let showcase = useRef(null)

    useEffect(() => {
        // 
        // Leaves
        // 
        // TweenMax.staggerFrom([leaf1, leaf2], 1, {
        //     opacity: 0,
        //     x: -100000,
        //     ease: Power3.easeOut
        // },.4)

        // TweenMax.staggerFrom([leaf3, leaf4], 1, {
        //     opacity: 0,
        //     x: 100000,
        //     ease: Power3.easeOut
        // },.4)

        TweenMax.staggerFrom([subtitle, heading], 2.5, {
            opacity: 0,
            y: 50,
            ease: Power3.easeOut
        }, .4)

        TweenMax.from(buttons, 2.5, {
            opacity: 0,
            y: 100,
            delay: 1,
            ease: Power3.easeOut
        })

        TweenMax.from(services, 2, {
            opacity: .5,
            x: -100,
            delay: .5,
            ease: Power3.easeOut
        })

        TweenMax.from(showcase, 1, {
            opacity: 0,
            scale: 0,
            delay: 1,
            ease: Power3.easeOut
        })

        console.log(services)
    }, [])
    return (
        <div className={styles.container}>
            <Curtain/>
            <div className={styles.details}>
                <span ref={e => subtitle = e} className={styles.subtitle}>ALL HEALTHY AND NUTRITIOUS FOOD IN ONE PLACE</span>
                <h1 ref={e=> heading = e} className={styles.heading}>Maecenas interdum diam massa, ut faucibus ligula iaculis.</h1>
                <div ref={e=>buttons = e} className={styles.buttons}>
                    <button>Learn more</button>
                    <span className={styles.play}>
                        <img src={PlayIcon} alt="Play"/>
                    </span>
                </div>
                <div ref={e=>services = e} className={styles.service}>
                    <ul>
                        <li>
                            <img src={TruckIcon} alt="Deliver"/>
                        </li>
                        <li>
                            <span className={styles.serviceName}>Free Delivery</span>
                            <span className={styles.summary}>In doorstep within minutes</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={MessageIcon} alt="Message"/>
                        </li>
                        <li>
                            <span className={styles.serviceName}>+123 4567 890</span>
                            <span className={styles.summary}>Landline is available 24/7</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div ref={e=>showcase=e} className={styles.showcase}>
                <img src={ShowcaseImage} alt="Showcase"/>
            </div>  
            {/* <div className={styles.leaves}>
                <img ref={e => leaf1 = e} src={Leaves1} alt="Leaf"/>
                <img ref={e => leaf2 = e} src={Leaves2} alt="Leaf"/>
                <img ref={e => leaf3 = e} src={Leaves3} alt="Leaf"/>
                <img ref={e => leaf4 = e} src={Leaves4} alt="Leaf"/>
            </div> */}
        </div>
    )
}

export default Home
