import React from 'react';
import styles from './Brewery.module.scss';
import { Card } from 'primereact/card';
import { IBrewery } from '../../interfaces/brewery';

interface BreweryProps {
  brew: IBrewery
}

function Brewery(props: BreweryProps) {
  return (
    <Card>
      Name: { props.brew.name }
      City: { props.brew.city }
      State: { props.brew.state }
    </Card>
  )
}

export default Brewery;
