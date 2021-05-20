import React, { useState } from "react";
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

const data = [
  {
    mes: "Jan",
    meta: 11,
    margem: 23,
  },
  {
    mes: "Fev",
    meta: 11,
    margem: 42,
  },
  {
    mes: "Mar",
    meta: 11,
    margem: 51,
  },
  {
    mes: "Abr",
    meta: 11,
    margem: 55,
  },
  {
    mes: "Mar",
    meta: 11,
    margem: 23,
  },
  {
    mes: "Mai",
    meta: 11,
    margem: 15,
  },
  {
    mes: "Abr",
    meta: 11,
    margem: 33,
  },
];

function Recharts1() {
  const [state, setState] = useState(data);

  const [espelho, setEspelho] = useState(Object.assign({}, state));

  const handleInputChange = (evento) => {
    const e = evento.target;

    if (e.alt === "1") {
      setEspelho({
        ...espelho,
        [e.id]: {
          mes: espelho[e.id].mes,
          margem: e.value,
          meta: espelho[e.id].meta,
        },
      });
    } else {
      setEspelho({
        ...espelho,
        [e.id]: {
          mes: espelho[e.id].mes,
          margem: espelho[e.id].margem,
          meta: e.value,
        },
      });
    }
  };

  const handleOnBlur = () =>{
    const convert = Object.values(espelho);
    setState(convert)
  }

  console.log(espelho);
  return (
    <>
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
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="margem"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="meta" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <div className="col-md-3">
          <h3>Altere</h3>
          <form className="form">
            {state.map((data, index) => (
              <div key={index}>
                <b>{data.mes}</b>
                <br />
                <label htmlFor={data.name}>Margem</label>
                <input
                  className="form-control"
                  type="number"
                  name={data.name}
                  placeholder={data.margem}
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  alt="1"
                  id={index}
                />
                <label htmlFor={data.mes}>Meta</label>
                <input
                  className="form-control"
                  type="number"
                  name={data.mes}
                  placeholder={data.meta}
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  id={index}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default Recharts1;
