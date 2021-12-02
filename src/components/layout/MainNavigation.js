import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import { useContext } from "react";

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/create-page">Create Page</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
