import React from "react";
import styles from './hero.module.css';


const Hero = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h2 className={styles.header}
        data-aos="fade-right"
        data-aos-easing="ease-in">
        Best homes, offices renovations and construction solution</h2>
      <button
        type="button"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-easing="ease-in"
        className={styles.button}
      >
        Contact us
      </button>
    </div>
  </div>
);

export default Hero;

