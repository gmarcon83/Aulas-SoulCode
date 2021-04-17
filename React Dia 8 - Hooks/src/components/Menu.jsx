import "./Menu.css";
import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
  return(
    <div className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/useState">Use State</Link>
          </li>
          <li>
            <Link to="/useEffect">Use Effect</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;