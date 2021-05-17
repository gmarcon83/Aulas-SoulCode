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
      <h3>Usuários</h3>
      <Link to={"/inserirUsuario"}>Novo Usuário</Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Informações</th>
            <th scope="col">Ações</th>
            <th scope="col">Criado em</th>
            <th scope="col">Editado em</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Login: {usuario.login}</td>
            <td>Tipo: {usuario.admin ? "Administrador" : "Usuário"}</td>
            <td> {moment(usuario.createdAt).format("DD/MM/YYYY")}</td>
            <td> {moment(usuario.editatedAt).format("DD/MM/YYYY")}</td>
            <td>
              <p> - </p>
              <p> - </p>
              <p>
                <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link>
              </p>
              <p>
                <Link to={`/excluirUsuario/${usuario.id}`}>Excluir</Link>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Link to="/usuarios">Voltar</Link>
      </p>
    </>
  );
}

export default DetalhesUsuario;
