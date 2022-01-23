import React, { useState } from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faMap, faClock } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title';
import Form from 'react-bootstrap/Form'
import './bootstrap.css';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('individual');
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
    <div id='contact' className={styles.wrapper}>
      <Title title='Contact' classNames={styles} />
      <div className={`container mb-5 d-flex justify-content-between align-center ${styles.wrapper}`}>
        <div className={styles.rootContact}>
          <p className={styles.description}>Construction offer you the best in metal roofing services, supplies and materials to help protect one of your biggest investments you will ever make, your home.</p>
          {contactDetails.map(({ id, name, icon }) => (
            <div key={id} className={styles.contact}>
              <FontAwesomeIcon icon={icon} color='#d1178d' size='2x' />
              <span className={styles.contactName}>{name}</span>
            </div>
          ))}
        </div>
        <div className={styles.rootMessage}>
          <div className={styles.options}>
            <span onClick={() => setActiveTab('individual')} className={`${styles.individual} ${activeTab === 'individual' && styles.active}`}>Individual</span>
            <span onClick={() => setActiveTab('company')} className={`${styles.company} ${activeTab === 'company' && styles.active}`}>Company</span>
          </div>
          {activeTab === 'individual'
            ? <form method="POST" action="https://formsubmit.co/testiniocos@gmail.com" enctype="multipart/form-data">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="Customer name" type="text" placeholder="Full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required name='Customer email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Job title </Form.Label>
                <Form.Control name="Job title" type="text" placeholder="Full name" />
              </Form.Group>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Attach cv</Form.Label>
                <Form.Control required type="file" name="Customer Cv" accept="image/png, image/jpeg" />
              </Form.Group>
              <button
                type="submite" className={styles.button} p
              >
                Contact us
              </button>
            </form>
            : <form method="POST" action="https://formsubmit.co/testiniocos@gmail.com">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Company name</Form.Label>
                <Form.Control required name="Company name" type="text" placeholder="Full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required name='Company Email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Leave your message</Form.Label>
                <Form.Control
                  name="Company message"
                  as="textarea"
                  required
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Form.Group>
              <button
                type="submite" className={styles.button}
              >
                Contact us
              </button>
            </form>
          }
        </div>
      </div>
    </div>
  )
};

export default Contact;