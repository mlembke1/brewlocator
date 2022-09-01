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
          <Link className={styles.link} to="/">
            <h2>All</h2>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="by-city">
            <h2>By City</h2>
          </Link>   
        </li>
        <li>
          <Link className={styles.link} to="by-postal">
            <h2>By Postal</h2>
          </Link>   
        </li>
        <li>
          <Link className={styles.link} to="by-type">
            <h2>By Type</h2>
          </Link>
        </li>
      </ul>      
    </div>
  )
};

export default Header;
