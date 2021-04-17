import React, {useContext} from 'react';
import {MeuContexto} from "./CreateContext"

function ComCall() {
  const data = useContext(MeuContexto);

  return(
    <>
      <p>Filho do useContext</p>
      <p>{data.cor}</p>
      <p>{data.memoria}</p>
    </>
  )
}

export default ComCall;