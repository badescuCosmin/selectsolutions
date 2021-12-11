import React from 'react';
import styles from './services.module.css';

const Services = () => {
  const options = [
    {
      id: '1',
      name: 'Passionate'
    },
    {
      id: '2',
      name: 'Dependable'
    },
    {
      id: '3',
      name: 'Honest'
    },
    {
      id: '4',
      name: 'Friendly'
    }
  ]
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Why choose us?</h3>
      <div className={`d-flex ${styles.cardsWrapper}`}>
        {options.map(({ id, name }) => (
          <div
            className={styles.card}
            data-aos="fade-up"
            data-aos-easing="ease-in"
            key={id}
          >
            <p className={styles.cardTitle}>{name}</p>
            <span>this is a short description</span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Services;