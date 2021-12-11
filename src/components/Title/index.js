import React from 'react';
import styles from './title.module.css';

const Title = ({ title }) => (
  <h2 className={`container ${styles.title}`}> {title}</ h2>
);

export default Title;