/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Assina.css";

function Assina(){
  return(
    <section class="assina">
        <h3>Novidades</h3>
        <p>Asssine nosso canal para receber ofertas e novidades do hotel </p>
        <hr />
        <form>
            <input type="email" placeholder="Email" />
            <button>Cadastrar</button>
        </form>
    </section>
  )
}

export default Assina;