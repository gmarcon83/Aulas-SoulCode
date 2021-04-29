/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hotel.css";
import foto1 from "../../img/ac1.jpg";
import foto2 from "../../img/ac2.jpg";
import foto3 from "../../img/ac3.jpg";
import foto4 from "../../img/ac4.jpg";

// css em constante
const img1 = {
  backgroundImage: `url("${foto1}")`
}
const img2 = {
  backgroundImage: `url("${foto2}")`
}
const img3 = {
  backgroundImage: `url("${foto3}")`
}
const img4 = {
  backgroundImage: `url("${foto4}")`
}

function Hotel(){
  return(
    <section className="hotel">
      <h3>Conheça o Hotel</h3>
      <p>Feche os olhos e imagine o paraiso da Terra.
        Sobral terra onde cada pessoa possui um Sol individual.</p>
      <hr />

      <ul className="grid">
        <li className="small" style={img1}></li>
        <li className="large" style={img2}></li>
        <li className="large" style={img3}></li>
        <li className="small" style={img4}></li>
      </ul>

      <ul className="grid">
        <li className="small" style={img1}></li>
        <li className="large" style={img2}></li>
        <li className="large" style={img3}></li>
        <li className="small" style={img4}></li>
      </ul>

    </section>
  )
}

export default Hotel;