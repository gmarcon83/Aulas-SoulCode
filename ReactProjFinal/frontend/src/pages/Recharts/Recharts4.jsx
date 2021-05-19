import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./style.css"

function Recharts4() {
  const [troca, setTroca] = useState(true)

  const [state, setState] = useState([
    {
      nome: "jan",
      valor: "255",
    },
    {
      nome: "fev",
      valor: "150",
    },
    {
      nome: "mar",
      valor: "650",
    },
    {
      nome: "abr",
      valor: "720",
    },
    {
      nome: "mai",
      valor: "350",
    },
    {
      nome: "jun",
      valor: "250",
    },
  ]);

  const capturaInput = (e) => {
    // Cancela o input respeitando a validação do HTML
    if (!e.target.validity.valid) {
      return;
    }
    const arr = state;
    arr[e.target.placeholder] = { nome: e.target.name, valor: e.target.value };

    // Precisa isso pra forcar o refresh do componente, se não não funciona
    setTroca(!troca)
  };

  return (
    <div className="altura">
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          width={500}
          height={300}
          data={state}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <form action="" className="row">
        {state.map((data, index) => {
          return (
            <input
            className="col-2 text-center"
              onChange={capturaInput}
              key={index}
              placeholder={index}
              type="number"
              name={data.nome}
              value={data.valor}
            />
          );
        })}
      </form>
    </div>
  );
}

export default Recharts4;
