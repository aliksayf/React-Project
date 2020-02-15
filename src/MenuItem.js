import React from 'react';
import logo from './logo.svg';

function MenuItem(props) {
    console.log();

  return (
      <a href={props.menuData.link}>
        <li className='navItem'>
            {props.menuData.text}
        </li>
      </a>
  );
}

export default MenuItem;
