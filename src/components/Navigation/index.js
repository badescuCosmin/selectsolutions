import React, { useState, useLayoutEffect, useEffect } from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-scroll'
import Logo from '../../static/svg/logo.png';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Navigation = () => {
  const [showMobileNav, toggleMobileNav] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    width > 767 && toggleMobileNav(false);
  }, [width])

  const navigationOptions = [
    {
      id: 'about',
      name: 'About',
      to: 'about'
    },
    {
      id: 'services',
      name: 'Services',
      to: 'services'
    },
    {
      id: 'gallery',
      name: 'Gallery',
      to: 'gallery'
    },
    {
      id: 'contact',
      name: 'Contact',
      to: 'contact'
    }
  ]
  return (
    <>
      <div className={styles.root}>
        <nav className={`container d-flex justify-content-between px-4 ${styles.navigation}`}>
          <img src={Logo} alt='logo' className={styles.logo} />
          <ul className={`d-flex m-0 d-none d-md-flex ${styles.list}`}>
            {navigationOptions.map(({ id, name, to }) => (
              <li className={styles.navigationItem} key={id}>
                <Link activeClass={styles.active} to={to} spy={true}>{name}</Link>
              </li>
            ))}
          </ul>
          {!showMobileNav
            ? <div onClick={() => toggleMobileNav(!showMobileNav)} className='d-md-none mt-3'>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
            : <span className={`d-md-none mt-3 ${styles.cross}`} onClick={() => toggleMobileNav(!showMobileNav)}> &#9587;</span>
          }
        </nav>
      </div>
      <div className={`${styles.mobileNavigation} ${showMobileNav ? styles.showMobileNav : ''}`}>
        <ul className={showMobileNav ? 'd-block' : 'd-none'}>
          {navigationOptions.map(({ id, name, to }) => (
            <li className={styles.mobileNavigationItem} key={id}>
              <Link onClick={() => toggleMobileNav(!showMobileNav)} smooth={true} duration={200} activeClass={styles.active} to={to} spy={true}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default Navigation;