import React, { FC } from 'react';
import styles from './All.module.scss';
import  axios, { AxiosResponse } from 'axios';

class All extends React.Component {

  constructor(props: any){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    axios.get(
      `https://api.openbrewerydb.org/breweries`
    ).then((res: AxiosResponse<any, any>) => {
      this.setState({ allBreweries: res });
    });
  }

  render(): React.ReactNode {
      return (
        <div>
          All Page Works!
        </div>
      )
  }
}

export default All;
