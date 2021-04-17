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
            <Link to="/useState">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/formDados">formDados</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;