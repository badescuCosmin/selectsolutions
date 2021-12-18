import React from 'react';
import { Link } from 'react-scroll'
import styles from './footer.module.css';
import Logo from '../../static/svg/logo.png';

const Footer = () => (
  <div className={styles.root}>
    <div className={`container ${styles.wrapper}`}>
      <img src={Logo} alt='logo' className={styles.logo} />
      <h3 className={styles.name}>Select Solutions Services LTD</h3>
      <div className={styles.description}>
        <p>Best homes, offices renovations and construction solution</p>
        <ul className={styles.list}>
          <li><Link activeClass={styles.active} to='about' spy={true}>About</Link></li>
          <li><Link activeClass={styles.active} to='services' spy={true}>Services</Link></li>
          <li><Link activeClass={styles.active} to='gallery' spy={true}>Gallery</Link></li>
          <li><Link activeClass={styles.active} to='contact' spy={true}>Contact</Link></li>
        </ul>
      </div>
      <p className={styles.tc}>@2021 Select Solutions Services LTD</p>
    </div>
  </div>
);

export default Footer;