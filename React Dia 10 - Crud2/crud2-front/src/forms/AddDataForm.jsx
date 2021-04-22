import React, { useState } from "react";

const initialFormState = { id: null, titulo: "", lancamento: "" };

function AddDataForm(props) {
  const [form, setForm] = useState(initialFormState);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!form.titulo || !form.lancamento) return;
        props.addData(form);
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
      <button>Novo</button>
    </form>
  );
}

export default AddDataForm;