import React, { useContext } from 'react';
import {NovoContexto} from "./CreateContext2";

function FilhoDoUseContext2() {
  const data = useContext(NovoContexto);

  return(
    <>
      <p>---Filho do Use---</p>
      <p>{data.preco}</p>
    </>
  )
}

export default FilhoDoUseContext2;