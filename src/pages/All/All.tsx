import React, { useEffect, useState } from 'react';
import styles from './All.module.scss';
import  { AxiosResponse } from 'axios';
import { getAllBreweries } from '../../services/breweries.service';
import { IBrewery } from '../../interfaces/brewery';
import Brewery from '../../components/Brewery/Brewery';

function All() {
  const [allBreweries, setAllBreweries] = useState<IBrewery[]>([]);

  useEffect(() => {
    // This is like ngOnInit or ComponentDidMount for Classes.
    if (allBreweries.length < 1) {
      getAllBreweries().then((res: AxiosResponse<any, any>) => {
        setAllBreweries(res.data);
      });
    }
    return () => {
      // This is like ngOnDestroy. Unsubscribe to whatever or clean up.
    }
  })

  return (
    <div className={styles.All}>
        {
          allBreweries
          .map((brew: IBrewery) => (
            <Brewery key={brew.id} brew={brew}></Brewery>
          ))
        }
    </div>
  )
}

export default All;
