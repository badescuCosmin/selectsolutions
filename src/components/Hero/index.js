import React from "react";
import styles from './hero.module.css';
import { Link } from 'react-scroll'

const Hero = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}
        data-aos="fade-right"
        data-aos-once={true}
        data-aos-easing="ease-in">
        Select Solutions Services LTD
      </h1>
      <h2 className={styles.subtitle}
        data-aos="fade-right"
        data-aos-once={true}
        data-aos-easing="ease-in">
        Best homes, offices renovations and construction solution
      </h2>
      <Link
        data-aos="fade"
        data-aos-delay="400"
        data-aos-once={true}
        data-aos-easing="ease-in"
        className={styles.button} to='contact' spy={true}>
        <span className={styles.buttonText}>Contact us</span>
      </Link>
    </div>
  </div>
);

export default Hero;

