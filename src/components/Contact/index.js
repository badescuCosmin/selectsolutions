import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faMap, faClock } from '@fortawesome/free-solid-svg-icons'
import withTitleContainer from '../../hoc/withTitleComponent';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  const contactDetails = [
    {
      id: 'mail',
      name: 'grigoregoropceanu95@gmail.com',
      icon: faMailBulk
    },
    {
      id: 'map',
      name: '109 Bramwell House Harper Road, London, England, SE1 6RJ',
      icon: faMap
    },
    {
      id: 'phone',
      name: '+44 7898766083',
      icon: faPhone
    },
    {
      id: 'clock',
      name: 'Mon - Sat: 7.00 - 16:00',
      icon: faClock
    }
  ]
  return (
    <div className='container d-flex'>
      <div className={styles.rootContact}>
        <p className={styles.description}>Construction offer you the best in metal roofing services, supplies and materials to help protect one of your biggest investments you will ever make, your home.</p>
        {contactDetails.map(({ id, name, icon }) => (
          <div key={id} className={styles.contact}>
            <FontAwesomeIcon icon={icon} color='#c69963' size='2x' />
            <span className={styles.contactName}>{name}</span>
          </div>
        ))}
      </div>
      <div className={styles.rootMessage}>
        <h2>Say Something</h2>
        <Form target="_blank" action="https://formsubmit.co/test@mailinator.com" method="POST" >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Full name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control name="attachment" accept="image/png, image/jpeg" type="file" />
          </Form.Group>
          <button type='submit'>Send</button>
        </Form>
      </div>
    </div>
  )
};

export default withTitleContainer(Contact);