import React, { useEffect, useState } from 'react';
import styles from './Types.module.scss';
import { Dropdown } from 'primereact/dropdown';
import { useLocation } from 'react-router-dom';
import { IBrewery } from '../../interfaces/brewery';
import { AxiosResponse } from 'axios';
import { getAllBreweries, getBreweriesByType } from '../../services/breweries.service';
import Brewery from '../../components/Brewery/Brewery';


interface TypesProps {
  breweries?: IBrewery[]
}

function Types(props: TypesProps) {

  const [breweries, setBreweries] = useState<IBrewery[]>([]);
  const [types, setTypes] = useState<{label: string, value: string}[]>([]);
  const [selectedBreweries, setSelectedBreweries] = useState<IBrewery[]>([]);  
  const [selectedType, setSelectedType] = useState<string>();


  const location = useLocation();

  useEffect(() => {
    if (!(props && props.breweries) && !(location.state)) {
      getAllBreweries()
      .then((res: AxiosResponse<any, any>) => {
        setBreweries(res.data);
        setTypeDropdown(breweries);
      });
    } else {
      setBreweries(props?.breweries || (location.state as IBrewery[]))
      setTypeDropdown(breweries);
    }
  }, [breweries, selectedType]);

  const setType = (e: any) => {
    setSelectedType(e);
    getBreweriesByType(selectedType)
    .then((res: AxiosResponse<any, any>) => {
      setSelectedBreweries(res.data);
    })
  }

  const getUniqueBreweries = (breweries: IBrewery[]): IBrewery[] => {
    return Array.from(new Map(breweries.map((item) => [item["brewery_type"], item])).values())
  }

  const setTypeDropdown = (breweries: IBrewery[]) => {
    setTypes(
      getUniqueBreweries(breweries)
      .map((b: IBrewery) => ({
        label: b.brewery_type,
        value: b.brewery_type
      })))
  }

  return (
    <div className={styles.Types}>
      <Dropdown
        value={selectedType}
        options={types}
        onChange={(e) => setType(e.value)}
        placeholder="Select Brewery Type"/>

        {
          selectedBreweries
          .map((brew: IBrewery) => (
            <Brewery key={brew.id} brew={brew}></Brewery>
          ))
        }
    </div>
  )
}

export default Types;
