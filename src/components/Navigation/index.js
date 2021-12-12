import React, { useState, useLayoutEffect, useEffect } from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-scroll'

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
      name: 'About'
    },
    {
      id: 'services',
      name: 'Services',
    },
    {
      id: 'contact',
      name: 'Contact'
    },
  ]
  return (
    <>
      <div className={styles.root}>
        <nav className={`container d-flex justify-content-between px-4 ${styles.navigation}`}>
          <span>Logo</span>
          <ul className='d-flex m-0 d-none d-md-flex '>
            {navigationOptions.map(({ id, name }) => (
              <li className={styles.navigationItem} key={id}>
                <Link activeClass="active" to="about" spy={true}>{name}</Link>
              </li>
            ))}
          </ul>
          {!showMobileNav
            ? <div onClick={() => toggleMobileNav(!showMobileNav)} className='d-md-none'>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
            : <span className={`d-md-none ${styles.cross}`} onClick={() => toggleMobileNav(!showMobileNav)}> &#9587;</span>
          }
        </nav>
      </div>
      <div className={`${styles.mobileNavigation} ${showMobileNav ? styles.showMobileNav : ''}`}>
        <ul className={showMobileNav ? 'd-block' : 'd-none'}>
          {navigationOptions.map(({ id, name }) => (
            <li className={styles.mobileNavigationItem} key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default Navigation;