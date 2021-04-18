import React, { useContext } from 'react';
import FilhoDoUseContext from "./FilhoDoUseContext2";
import {NovoContexto} from "./CreateContext2";

function UseContext2() {
  const data = useContext(NovoContexto);

  return(
    <>
      <p>{data.nome}</p>
      <FilhoDoUseContext />
    </>
  )
}

export default UseContext2;