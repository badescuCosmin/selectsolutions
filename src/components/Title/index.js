import React from 'react';
import styles from './title.module.css';

const Title = ({ title, classNames = {} }) => (
  <h2 className={`container ${styles.title} ${classNames.additionalTitleStyles}`}> {title}</ h2>
);

export default Title;