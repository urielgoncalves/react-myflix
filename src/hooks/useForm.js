import { useState } from 'react';

// Custom hook
function useForm(model) {
  const [dadosForm, setDadosForm] = useState(model);

  function handleDadosForm(key, value) {
    // chave: nome, descricao, cor
    setDadosForm({
      ...dadosForm,
      [key]: value, // nome: 'valor'
    });
  }

  function handleChange(event) {
    handleDadosForm(
      event.target.getAttribute('name'),
      event.target.value,
    );
    // const { getAttribute, value} = event.target;

    // handleDadosForm(
    //   getAttribute('name'),
    //   value
    // );
  }

  function clearForm() {
    setDadosForm(model);
  }

  return {
    dadosForm,
    handleChange,
    clearForm,
  };
}

export default useForm;