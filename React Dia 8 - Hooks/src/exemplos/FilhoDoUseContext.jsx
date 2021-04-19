import React, {useContext, useLayoutEffect} from 'react';
import {MeuContexto} from "./CreateContext"

function FilhoDoUseContext() {
  const data = useContext(MeuContexto);

  return(
    <>
      <p>Filho do useContext</p>
      <p>{data.cor}</p>
      <p>{data.memoria} </p>
    </>
  )
}

export default FilhoDoUseContext;