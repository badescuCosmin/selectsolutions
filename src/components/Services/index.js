import React from "react";
import styles from './services.module.css';
import Title from "../Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  const services = [
    {
      id: 'roofting',
      name: 'Metal Roofting',
      description: 'Construction offer you the best in metal roofing services, supplies and materials to help protect one of your biggest investments you will ever make, your home.'
    },
    {
      id: 'grenn_building',
      name: 'Green Building',
      description: 'By choosing to build green, you are making an effort to reduce the burden on the environment and also add value to your home.'
    },
    {
      id: 'construction_Consultant',
      name: 'Construction Consultant',
      description: 'this is a short description'
    },
    {
      id: 'general_contracting',
      name: 'General Contracting',
      description: 'this is a short description'
    },
    {
      id: 'construction_management',
      name: 'Construction Management',
      description: 'this is a short description'
    },
    {
      id: 'house_renovation',
      name: 'House Renovation',
      description: 'this is a short description'
    }
  ]
  return (
    <div id='services' className="container p-0">
      <Title title='Services' classNames={styles} />
      <div className={styles.cardsHolder}>
        {services.map(({ id, name, description }, i) => (
          <div key={id} className={styles.service}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCertificate} color='#d1178d' size='1x' />
              <h4 className={styles.title}>{name}</h4>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Services;