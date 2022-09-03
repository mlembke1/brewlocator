import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Brewery from '../../components/Brewery/Brewery';
import { IBrewery } from '../../interfaces/brewery';
import { getAllBreweries } from '../../services/breweries.service';
import styles from './Cities.module.scss';

interface CitiesProps {}

function Cities(props: CitiesProps) {
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

  const cityHeader = (ii: number) => {
    return (ii === 0 || allBreweries[ii].city !== allBreweries[(ii - 1)].city) && <h3 className={styles.cityHeader}>{allBreweries[ii].city}</h3>;
  }
  return (
    <div className={styles.Cities}>
      {
        allBreweries
        .sort((a: IBrewery, b: IBrewery) => a.city > b.city ? 1 : -1)
        .map((brew: IBrewery, ii: number) => (
          <div key={ii} className={styles.cityWrapper}>
            {cityHeader(ii)}
            <Brewery key={brew.id} brew={brew}></Brewery>
          </div>
        ))
      }
    </div>
  )
}

export default Cities;
