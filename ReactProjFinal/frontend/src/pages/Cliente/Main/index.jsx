import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function MainClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3303/ordemservico/clientes").then((res) => {
      setClientes(res.data);
    });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Clientes</h3>
        <div>
          <Link to={"/inserirCliente"} className="btn btn-primary mt-3 mx-3">Novo Usuário</Link>
          <Link to="/" className="btn btn-success mt-3">Voltar</Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.telefone}</td>
              <td className="d-flex justify-content-end">
                <Link to={`/detalhesCliente/${cliente.id}`} className="btn btn-warning">Detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MainClientes;
