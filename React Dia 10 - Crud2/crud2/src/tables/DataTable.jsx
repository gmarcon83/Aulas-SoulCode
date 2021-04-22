import React from "react";

function DataTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Lançamento</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>{RenderData(props.tableData)}</tbody>
    </table>
  );
}

function RenderData(data) {
  if (data == null) {
    return <p>No Data</p>;
  }
  return (
    data.map (data =>
    <tr key={data.id}>
      <td>{data.titulo}</td>
      <td>{data.lancamento}</td>
      <td>
        <button className="button muted-button">Edit</button>
        <button className="button muted-button">Delete</button>
      </td>
    </tr>
  ));
}

export default DataTable;
