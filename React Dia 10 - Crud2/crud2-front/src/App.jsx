import React, { useState, useEffect } from "react";
import DataTable from "./tables/DataTable";
import AddDataForm from "./forms/AddDataForm";
import axios from 'axios'

const tableData = []

function App() {
  const [data, setData] = useState(tableData);
  const [swap, setSwap] = useState(true)

  function refresh() {
    setSwap(!swap)
  }

  //Importa dados do servidor e coloca na tabela
  useEffect(() => {
    axios
      .get("http://localhost:3100/jogos")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [swap]);

  return (
    <div className="container">
      <h1>Aplicativo Crud 2</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Novo Título</h2>
          <AddDataForm refresh={refresh} />
        </div>
        <div className="flex-large">
          <h2>Títulos</h2>
          <DataTable tableData={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
