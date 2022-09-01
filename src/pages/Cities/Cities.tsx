import React from 'react';
import styles from './Cities.module.scss';

interface CitiesProps {}

function Cities(props: CitiesProps) {
  return (
    <div className={styles.Cities}>
      Cities Component
    </div>
  )
}

export default Cities;
