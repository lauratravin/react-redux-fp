import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="">
      <NavLink to="/catscontainer">Home</NavLink>
      <NavLink to="/newcat">New Cat</NavLink>
      <NavLink to="/favcontainer">Fav Cats</NavLink>
    </div>
    );
  };

export default NavBar;
