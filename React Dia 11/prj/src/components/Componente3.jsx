import React, { useContext } from 'react'
import {NomeDoContexto} from "../App"


function Componente3(props) {
  const contexto = useContext(NomeDoContexto)

  return (
    <div>
      <p>Componente 3</p>
      <p>Valor = {props.umValor}</p>
      <button onClick={() => contexto.setNome(10)}>mudar</button>
    </div>
  )
}

export default Componente3
