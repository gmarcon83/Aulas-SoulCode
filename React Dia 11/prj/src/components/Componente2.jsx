import React from 'react'
import Componente3 from "./Componente3"

function Componente2(props) {
  return (
    <div>
      <p>Componente 2</p>
      <Componente3 umValor={props.umValor}/>
    </div>
  )
}

export default Componente2
