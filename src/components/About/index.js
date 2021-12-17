import React from 'react';
import styles from './about.module.css';
import AboutImage from '../../static/svg/about1.jpg';

import Title from '../Title';
const About = () => {
  return (
    <div id="about">
      <Title title='About' />
      <div className='container p-0 d-flex align-items-center flex-column  flex-md-row'>
        <img
          className='mx-5'
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-once={true}
          src={AboutImage} className={styles.leftImage}
        />
        <div
          className='mx-5'
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-once={true}
        >
          <p>We are passionate about creating spaces that inspire and serve customers in the private and public sector. Our core markets include commercial offices, mixed-use buildings, residential, retail, education, distribution and logistics, hotels and leisure.</p>
          <p>Driven by our strong company values, our focus is on exceeding customer expectations, leaving a positive legacy in the communities we serve, protecting the environment for the future generation and promoting a safe and inclusive workplace for our colleagues.</p>
        </div>
      </div>
    </div>
  )
};

export default About;