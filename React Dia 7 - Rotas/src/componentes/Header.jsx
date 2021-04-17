import React from 'react';
import {Link} from "react-router-dom";

function Header(){
  return(
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produto">Produto</Link> </li>
          <li><Link to="/sobre">Sobre</Link> </li>
          <li><Link to="/adqwed">Erro</Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;