import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function MainUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3303/ordemservico/usuarios")
      .then(
        (res) => {
          setUsuarios(res.data);
        });
      }, []);

  return (
    <>
      <h3>Usuários</h3>
      <Link to={"/inserirUsuario"}>Novo Usuário</Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Tipo</th>
            <th scope="col">Mais Informações</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(
              (usuario) =>(
                <tr key={usuario.id}>
                  <td>{usuario.login}</td>
                  <td>{usuario.admin ? "Administrador" : "Usuário"}</td>
                  <td>
                    <Link to={`/detalhesUsuario/${usuario.id}`}>Detahes</Link>
                </td>
              </tr>
              )
            )
          }
        </tbody>
      </table>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </>
  );
}

export default MainUsuarios;
