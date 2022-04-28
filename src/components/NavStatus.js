import React from "react";
import { NavLink } from "react-router-dom";

const NavStatus = () => {
  return (
    <div className='containerNav'>
      <nav>
        <ul>
          <li><NavLink to='/'>All</NavLink></li>
          <li><NavLink to='/active'>Active</NavLink></li>
          <li><NavLink to='/completed'>Completed</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavStatus