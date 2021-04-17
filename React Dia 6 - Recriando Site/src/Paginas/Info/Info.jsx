/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Info.css";

function Info(){
  return(
    <section className="info">
        <h3>Unico hotel perto do SOL</h3>
        <p>Implantado ao pé do vulcão da Serra da Meruoca,
            o hotel tem vista perfeita para lava</p>
        <hr />

        <ul className="grid">
            <li>
                <i className="fas fa-location-arrow"></i>
                <h4>Localização</h4>
                <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
            </li>

            <li>
                <i className="fas fa-gift"></i>
                <h4>Pacotes e Ofertas</h4>
                <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
            </li>

            <li>
                <i className="fas fa-home"></i>
                <h4>Acomodações</h4>
                <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
            </li>
        </ul>
    </section>
  )
}

export default Info;