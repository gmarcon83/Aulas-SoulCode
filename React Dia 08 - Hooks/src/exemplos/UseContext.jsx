import React, { useContext } from "react";
import {MeuContexto} from "./CreateContext";
import FilhoDoUseContext from "./FilhoDoUseContext";

function UseContext() {
  const data = useContext(MeuContexto);

  return (
    <>
      <p>{data.nome}</p>
      <p>{data.preco} </p>
      <FilhoDoUseContext />
    </>
  );
}

export default UseContext;
