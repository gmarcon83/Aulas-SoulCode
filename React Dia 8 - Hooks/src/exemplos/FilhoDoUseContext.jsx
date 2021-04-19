import React, {useContext, useEffect} from 'react';
import {MeuContexto} from "./CreateContext"

function FilhoDoUseContext() {
  const data = useContext(MeuContexto);

  useEffect(
    () => {
      data.nome = "Trocou nome"
      console.log("rodou")
    }
  )

  return(
    <>
      <p>Filho do useContext</p>
      <p>{data.cor}</p>
      <p>{data.memoria}</p>
      <p>Data trocada?  {data.nome}</p>
    </>
  )
}

export default FilhoDoUseContext;