import React from 'react'
import Componente2 from './Componente2'

function Componente1(props) {
  return (
    <div>
      <p>Componente 1</p>
      <Componente2 umValor={props.umValor}/>
    </div>
  )
}

export default Componente1
