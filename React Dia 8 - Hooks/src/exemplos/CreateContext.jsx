import React, { createContext, useContext } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import { data } from "../components/Data";
import UseContext from "./UseContext";

export const MeuContexto = createContext();

function CreateContext() {
  return (
    <>
      <PageTitle title="createContext" subtitle="" />
      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <MeuContexto.Provider value={data}>
          <UseContext />
        </MeuContexto.Provider>
      </div>
    </>
  );
}

export default CreateContext;
