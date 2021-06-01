import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

function ExcluirUsuario(props) {
  const [state, setState] = useState({
    usuario: {
      id: props.match.params.id,
      login: "",
      senha: "",
      admin: true,
    },
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/usuarios/${id}`)
      .then((res) => {
        setState({ usuario: { ...res.data } });
      });
  }, []);

  const handleConfirm = (ev) => {
    const { id } = state.usuario;
    console.log(id);
    axios
      .put(`http://localhost:3303/ordemservico/excluirUsuario/${id}`)
      .then((data) => {
        if (data) {
          alert("Dados excluidos com sucesso");
          setRedirect(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {redirect ? <Redirect to="/usuarios" /> : null}
      <h3>Deseja Remover o Usuário {state.usuario.login}</h3>
      <button className="px-4 btn btn-danger mt-2" onClick={handleConfirm}>
        Sim
      </button>
      <p>
        <Link to="/usuarios" className="btn btn-success mt-3">
          Voltar
        </Link>
      </p>
    </>
  );
}

export default ExcluirUsuario;
