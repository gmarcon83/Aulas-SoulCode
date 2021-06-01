import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function MainEquipamentos(props) {
  const [equipamentos, setEquipamentos] = useState([]);
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const {id} = props.match.params
    console.log(id)
    axios.get(`http://localhost:3303/ordemservico/clientesEquips/${id}`)
    .then((res) => {
      const get = res.data;
      const equipamentos = Object.assign(get)
      setCliente(equipamentos)
      setEquipamentos(equipamentos.equip);
    });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Equipamentos de {cliente.nome}</h3>
        <div>
          <Link to={`/inserirEquipamento/${cliente.id}`} className="btn btn-primary mt-3 mx-3">Novo Equipamento</Link>
          <Link to="/clientes" className="btn btn-success mt-3">Voltar</Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Tipo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {equipamentos.map((equipamento, index) => (
            <tr key={index}>
              <td>{equipamento.nome}</td>
              <td>{equipamento.marca}</td>
              <td>{equipamento.modelo}</td>
              <td>{equipamento.tipo}</td>
              <td className="d-flex justify-content-end">
                <Link to={`/detalhesEquipamento/${equipamento.id}`} className="btn btn-warning">Detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MainEquipamentos;
