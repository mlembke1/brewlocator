import  axios, { AxiosResponse } from 'axios';
import { IBrewery } from '../interfaces/brewery';

export function getAllBreweries():  Promise<AxiosResponse<any, any>> {
    return axios.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries`);
}