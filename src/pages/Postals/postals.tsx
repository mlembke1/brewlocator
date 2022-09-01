import React, { FC } from 'react';
import styles from './Postals.module.scss';

interface PostalsProps {}

function Postals(props: PostalsProps){
  return (
    <div className={styles.Postals}>
      Postals Component
    </div>
  )
}

export default Postals;
