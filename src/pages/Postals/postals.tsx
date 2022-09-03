import React, { FC, useState } from 'react';
import styles from './Postals.module.scss';
import { AutoComplete } from 'primereact/autocomplete';
import { getBreweriesByPostal } from '../../services/breweries.service';
import { IBrewery } from '../../interfaces/brewery';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';


interface PostalsProps {}

function Postals(props: PostalsProps){

  const [filteredBreweries, setFilteredBreweries] = useState<IBrewery[]>([])
  const [selectedBrewery, setSelectedBrewery] = useState<IBrewery>();

  let navigate = useNavigate(); 

  const searchBreweries = (event: any) => {
    getBreweriesByPostal(event.query)
    .then((res: AxiosResponse<any, any>) => {
      setFilteredBreweries(res.data);
    });
  }

  const selected = (e: any) => {
    navigate(`/brewery/${e.id}`, { state: e })
  }

  return (
    <div className={styles.Postals}>
      <AutoComplete
        value={selectedBrewery}
        suggestions={filteredBreweries}
        completeMethod={searchBreweries}
        field="name"
        onChange={(e) => setSelectedBrewery(e.value)}
        onSelect={(e) => selected(e.value)} />
    </div>
  )
}

export default Postals;
