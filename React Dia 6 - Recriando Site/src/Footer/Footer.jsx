/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

function Footer(){
  return(
    <footer>
        <ul>
          <li><a href=""><i className="fab fa-facebook"></i></a></li>
          <li><a href=""><i className="fab fa-twitter"></i></a></li>
          <li><a href=""><i className="fab fa-pinterest"></i></a></li>
          <li><a href=""><i className="fab fa-snapchat"></i></a></li>
        </ul>

        <p>Todos os diretos reservados - Hotel Paraiso -
          Desenvolvido pela SoulCode Academy</p>
    </footer>
  )
}

export default Footer;