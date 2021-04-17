/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import Logo from "../img/logo.jpg"
import {Link} from "react-router-dom";

function Header(){
  return(
    <header>
    <a href="#"><img src={Logo} alt="Hotel Paraiso" /></a>
    <nav>
        <ul>
            <li><Link to="/Hero">Home</Link></li>
            <li><Link to="/Hotel">Sobre</Link></li>
            <li><Link to="/Info">Localização</Link></li>
            <li><Link to="/Assina">Contato</Link></li>
        </ul>
    </nav>
</header>
  )
}

export default Header;