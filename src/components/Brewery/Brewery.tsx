import React, { useEffect, useState } from 'react';
import styles from './Brewery.module.scss';
import { Card } from 'primereact/card';
import { IBrewery } from '../../interfaces/brewery';
import { getBreweryById } from '../../services/breweries.service';
import { Params, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { click } from '@testing-library/user-event/dist/click';

export interface BreweryProps {
  brew?: IBrewery
}

function Brewery(props?: BreweryProps) {
  const [brewery, setBrewery] = useState<IBrewery>();
  const params: any = useParams();
  
  let navigate = useNavigate(); 
  const location = useLocation();

  useEffect(() => {
    if (!(props && props.brew) && !(location.state)) {
      getBreweryById(params.breweryid)
      .then((res: AxiosResponse<any, any>) => {
        setBrewery(res.data);
      });
    } else { setBrewery(props?.brew || (location.state as IBrewery)) }
  }, [params.breweryid, props]);

  return (
    <Card onClick={() => navigate(`/brewery/${brewery?.id}`)} className={styles.Brewery}>
      <div className={styles['brew-detail-wrapper']}>
          <div>Name:</div> <div>{ brewery?.name }</div>
      </div>
      <div className={styles['brew-detail-wrapper']}>
          <div>City:</div> <div>{ brewery?.city }</div>
      </div>
      <div className={styles['brew-detail-wrapper']}>
          <div>State:</div> <div>{ brewery?.state }</div>
      </div>
      <div className={styles['brew-detail-wrapper']}>
          <div>Type:</div> <div>{ brewery?.brewery_type }</div>
      </div>
    </Card>
  )
}

export default Brewery;
