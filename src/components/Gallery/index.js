import React from "react";
import styles from './galery.module.css';
import Title from "../Title";

const Gallery = () => {
  return (
    <div id="gallery" className={`container d-flex ${styles.wrapper}`}>
      <Title title='Gallery' />
      <div
        className='mx-5'
        data-aos="fade"
        data-del
        data-aos-easing="ease-in"
        data-aos-delay="100"
        data-aos-once={true}
        className={`${styles.image1} ${styles.img}`}
      />
      <div
        className='mx-5'
        data-aos="fade"
        data-aos-easing="ease-in"
        data-aos-delay="200"
        data-aos-once={true}
        className={`${styles.image2} ${styles.img}`}
      />
      <div
        className='mx-5'
        data-aos="fade"
        data-aos-easing="ease-in"
        data-aos-delay="300"
        data-aos-once={true}
        className={`${styles.image3} ${styles.img}`}
      />
      <div
        className='mx-5'
        data-aos="fade"
        data-aos-easing="ease-in"
        data-aos-delay="400"
        data-aos-once={true}
        className={`${styles.image4} ${styles.img}`}
      />
      <div
        className='mx-5'
        data-aos="fade"
        data-aos-easing="ease-in"
        data-aos-delay="500"
        data-aos-once={true}
        className={`${styles.image5} ${styles.img}`}
      />
      <div
        className='mx-5'
        data-aos="fade"
        data-aos-delay="600"
        data-aos-easing="ease-in"
        data-aos-once={true}
        className={`${styles.image6} ${styles.img}`}
      />
    </div>
  )
};

export default Gallery;