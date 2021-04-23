import React, { useState } from "react";
import DataTable from "./tables/DataTable";
import AddDataForm from "./forms/AddDataForm";

const tableData = [
  { id: 1, titulo: "After Burner", lancamento: "12/12/1987" },
  { id: 2, titulo: "Phantasy Star", lancamento: "20/12/1987" },
  { id: 3, titulo: "Spy vs. Spy", lancamento: "20/09/1986" },
];

// fetch('http://localhost:3100/jogos')
// .then(response => setData(response))

function App() {
  const [data, setData] = useState(tableData);

  function addData(novaData) {
    novaData.id = data.length + 1;
    setData([...data, novaData]);
  }

  return (
    <div className="container">
      <h1>Aplicativo Crud 2</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Novo Título</h2>
          <AddDataForm addData={addData} />
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
