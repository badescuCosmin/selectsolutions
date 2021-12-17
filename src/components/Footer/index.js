import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css';
import Logo from '../../static/svg/logo.png';

const Footer = () => (
  <div className={styles.root}>
    <div className={`container ${styles.wrapper}`}>
      <img src={Logo} alt='logo' className={styles.logo} />
      <h3 className={styles.name}>Services Limited</h3>
      <div className={styles.description}>
        <p>Best homes, offices renovations and construction solution</p>
        <ul className={styles.list}>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <p className={styles.tc}>@2021 Services Limited</p>
    </div>
  </div>
);

export default Footer;