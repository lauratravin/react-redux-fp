import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <nav>
          <div>    <NavLink to="/catscontainer">Home</NavLink>  </div>

          <div>    <NavLink to="/favcontainer">Favorites</NavLink> </div>
          <div>    <NavLink to="/newcat">New Cat</NavLink> </div>
        </nav>  
    </div>
    );
  };

export default NavBar;
