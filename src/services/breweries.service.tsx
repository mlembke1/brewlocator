import  axios, { AxiosResponse } from 'axios';
import { IBrewery } from '../interfaces/brewery';

export function getAllBreweries():  Promise<AxiosResponse<any, any>> {
    return axios.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries`);
}

export function getBreweryById(id: string):  Promise<AxiosResponse<any, any>> {
    return axios.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries/${id}`);
}

export function getBreweriesByPostal(postal: string):  Promise<AxiosResponse<any, any>> {
    return axios.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries?by_postal=${postal}`);
}

export function getBreweriesByType(type?: string):  Promise<AxiosResponse<any, any>> {
    return axios.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries?by_type=${type}`);
}

cleçç