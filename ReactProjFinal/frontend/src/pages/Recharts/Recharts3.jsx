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
import "./style.css";

function Recharts4() {
  const [troca, setTroca] = useState(true);

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

  const [espelho, setEspelho] = useState(Object.assign({}, state));

  const capturaInput = (e) => {
    console.log(e.target);
    setEspelho({
      ...state,
      [e.target.id]: { name: e.target.name, valor: e.target.value },
    });
  };

  const handleOnClick = () =>{
    const convert = Object.values(espelho);
    setState(convert)
  }

  return (
    <div className="altura">
      <ResponsiveContainer width="100%" height="100%">
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
          <YAxis domain={[0, 'dataMax + 1000']} />
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
              id={index}
              key={index}
              placeholder={data.valor}
              type="number"
              name={data.nome}
              onBlur={handleOnClick}
            />
          );
        })}
      </form>
    </div>
  );
}

export default Recharts4;
