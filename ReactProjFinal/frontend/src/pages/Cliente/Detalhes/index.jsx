import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";

function DetalhesCliente(props) {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/clientes/${id}`)
      .then((res) => {
        setCliente(res.data);
      });
  }, [props.match.params]);
  console.log(cliente)

  return (
    <>
        <div className="d-flex align-items-center justify-content-between">
          <h3>Detalhes do Cliente</h3>
          <p>
            <Link to="/clientes" className="btn btn-success mt-3">
              Voltar
            </Link>
          </p>
        </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Informações</th>
            <th scope="col">Ações</th>
            <th scope="col">Criado em</th>
            <th scope="col">Editado em</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome: {cliente.nome}</td>
            <td>Telefone: {cliente.telefone}</td>
            <td> {moment(cliente.createdAt).format("DD/MM/YYYY")}</td>
            <td> {moment(cliente.editatedAt).format("DD/MM/YYYY")}</td>
            <td>
              <p className="text-center">
              <Link to={`/equipamentosCliente/${cliente.id}`} className="btn btn-primary w-75">Equipamentos</Link>
              </p>
              <p className="text-center">
              <Link to={`/gerarRelatorio/${cliente.id}`} className="btn btn-primary w-75">Gerar Relatorio</Link>
              </p>
              <p className="text-center">
                <Link to={`/editarCliente/${cliente.id}`} className="btn btn-warning w-75">Editar</Link>
              </p>
              <p className="text-center">
                <Link to={`/excluirCliente/${cliente.id}`} className="btn btn-danger w-75">Excluir</Link>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DetalhesCliente;
