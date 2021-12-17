import React from "react";
import styles from './hero.module.css';
import { Link } from 'react-scroll'

const Hero = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h2 className={styles.header}
        data-aos="fade-right"
        data-aos-once={true}
        data-aos-easing="ease-in">
        {/* <span className="d-block"  >Service Limited</span> <br /> */}
        Best homes, offices renovations and construction solution</h2>
      <button
        type="button"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-once={true}
        data-aos-easing="ease-in"
        className={styles.button}
      >
        <Link activeClass={styles.active} to='contact' spy={true}>Contact us</Link>
      </button>
    </div>
  </div>
);

export default Hero;

