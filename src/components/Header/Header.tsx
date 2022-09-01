import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {}

function Header(props: HeaderProps) {

  return (
    <div className={styles.Header}>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="by-city">By City</Link>   
        </li>
        <li>
          <Link to="by-postal">By Postal</Link>   
        </li>
        <li>
          <Link to="by-type">By Type</Link>
        </li>
      </ul>      
    </div>
  )
};

export default Header;
