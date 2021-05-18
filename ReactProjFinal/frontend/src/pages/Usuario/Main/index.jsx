import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function MainUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3303/ordemservico/usuarios").then((res) => {
      setUsuarios(res.data);
    });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Usuários</h3>
        <div>
          <Link to={"/inserirUsuario"} className="btn btn-primary mt-3 mx-3">Novo Usuário</Link>
          <Link to="/" className="btn btn-success mt-3">Voltar</Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Tipo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.login}</td>
              <td>{usuario.admin ? "Administrador" : "Usuário"}</td>
              <td className="d-flex justify-content-end">
                <Link to={`/detalhesUsuario/${usuario.id}`} className="btn btn-warning">Detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MainUsuarios;
