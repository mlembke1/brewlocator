import React from 'react';
import styles from './Brewery.module.scss';
import { Card } from 'primereact/card';
import { IBrewery } from '../../interfaces/brewery';

interface BreweryProps {
  brew: IBrewery
}

function Brewery(props: BreweryProps) {
  return (
    <Card className={styles.Brewery}>
      <div className={styles['brew-detail-wrapper']}>
          <div>Name:</div> <div>{ props.brew.name }</div>
      </div>
      <div className={styles['brew-detail-wrapper']}>
          <div>City:</div> <div>{ props.brew.city }</div>
      </div>
      <div className={styles['brew-detail-wrapper']}>
          <div>State:</div> <div>{ props.brew.state }</div>
      </div>
    </Card>
  )
}

export default Brewery;
