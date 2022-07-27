import classes from './Nav.module.css'
import React from 'react';

function Nav() {

  return (
<div className= {classes.NavBar}>
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/#about">About me</a>
      </li>
      <li>
        <a href="/#skills">Skills</a>
      </li>
      <li>
        <a href="/#projects">Projects</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  </nav>
</div>
  );
}

export default Nav;