import React, { useState } from "react";
import axios from "axios";

const initialFormState = { id: null, titulo: "", lancamento: "" };

function AddDataForm(props) {
  const [form, setForm] = useState(initialFormState);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Testmos se está preenchido o form
          if (!form.titulo || !form.lancamento) return;
          // Formatamos os dados
          const dadosForm = {
            titulo: form.titulo,
            lancamento: form.lancamento,
          };
          axios
            .post("http://localhost:3100/novojogo", dadosForm)
            .then((res) => {
              console.log(res);
              props.refresh();
            })
            .catch((err) => console.log(err));
          setForm(initialFormState);
        }}
      >
        <label for="titulo">Título</label>
        <input
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleInputChange}
        />
        <label for="lancamento">Lançamento</label>
        <input
          type="text"
          name="lancamento"
          value={form.lancamento}
          onChange={handleInputChange}
        />
        <button>Cadastrar</button>
      </form>
    </>
  );
}

export default AddDataForm;
