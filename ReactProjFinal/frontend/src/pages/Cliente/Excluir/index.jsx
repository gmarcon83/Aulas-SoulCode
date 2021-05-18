import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

function ExcluirUsuario(props) {
  const [state, setState] = useState({
    cliente: {
      id: props.match.params.id,
      nome: "",
      telefone: "",
    },
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/clientes/${id}`)
      .then((res) => {
        setState({ cliente: { ...res.data } });
      });
  }, []);

  const handleConfirm = (ev) => {
    const { id } = state.cliente;
    console.log(id);
    axios
      .put(`http://localhost:3303/ordemservico/excluirCliente/${id}`)
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
      {redirect ? <Redirect to="/clientes" /> : null}
      <h3>Deseja Remover o Cliente {state.cliente.login}</h3>
      <button className="px-4 btn btn-danger mt-2" onClick={handleConfirm}>
        Sim
      </button>
      <p>
        <Link to="/clientes" className="btn btn-success mt-3">
          Voltar
        </Link>
      </p>
    </>
  );
}

export default ExcluirUsuario;
