import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";

function DetalhesUsuario(props) {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/usuarios/${id}`)
      .then((res) => {
        setUsuario(res.data);
      });
  }, [props.match.params]);
  console.log(usuario)

  return (
    <>
        <div className="d-flex align-items-center justify-content-between">
          <h3>Detalhes do Usuário</h3>
          <p>
            <Link to="/usuarios" className="btn btn-success mt-3">
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
            <td>Login: {usuario.login}</td>
            <td>Tipo: {usuario.admin ? "Administrador" : "Usuário"}</td>
            <td> {moment(usuario.createdAt).format("DD/MM/YYYY")}</td>
            <td> {moment(usuario.editatedAt).format("DD/MM/YYYY")}</td>
            <td>
              <p className="text-center"> - </p>
              <p className="text-center"> - </p>
              <p className="text-center">
                <Link to={`/editarUsuario/${usuario.id}`} className="btn btn-warning w-50">Editar</Link>
              </p>
              <p className="text-center">
                <Link to={`/excluirUsuario/${usuario.id}`} className="btn btn-danger w-50">Excluir</Link>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DetalhesUsuario;
