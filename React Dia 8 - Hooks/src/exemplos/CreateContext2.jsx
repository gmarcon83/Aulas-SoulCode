import React, { createContext, useContext } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import { data } from "../components/Data";
import UseContext2 from "./UseContext2";

export const NovoContexto = createContext();

function CreateContext2() {
  return (
    <>
      <PageTitle title="createContext" subtitle="" />
      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <NovoContexto.Provider value={data}>
            <UseContext2 />
        </NovoContexto.Provider>
      </div>
    </>
  );
}

export default CreateContext2;
