import React from 'react';
import styles from './characteristics.module.css';

const Charactersitics = () => {
  const options = [
    {
      id: '1',
      name: 'Passionate',
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
        {options.map(({ id, name }, i) => (
          <div
            className={styles.card}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-delay={i * 150}
            data-aos-once={true}
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

export default Charactersitics;