import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// // Custom hook
// function useForm(m) {
//   const [dadosForm, setDadosForm] = useState(m);
//   function handleDadosForm(key, value) {
//     // chave: nome, descricao, cor
//     setDadosForm({
//       ...dadosForm,
//       [key]: value, // nome: 'valor'
//     });
//   }

//   function handleChange(event) {
//     handleDadosForm(
//       event.target.getAttribute('name'),
//       event.target.value,
//     );
//     // const { getAttribute, value} = event.target;

//     // handleDadosForm(
//     //   getAttribute('name'),
//     //   value
//     // );
//   }

//   function clearForm() {
//     setDadosForm(m);
//   }

//   return {
//     dadosForm,
//     handleChange,
//     clearForm,
//   };
// }

function CadastroCategoria() {
  const m = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('');

  const { dadosForm, handleChange, clearForm } = useForm(m);

  useEffect(() => {
    const PUBLIC_URL = 'http://localhost:8080/categorias';
    fetch(PUBLIC_URL)
      .then(async (response) => {
        const jsonResponse = await response.json();
        setCategorias([
          ...jsonResponse,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        // mantem as categorias existentes ... e adiciona a nova
        setCategorias([
          ...categorias,
          dadosForm,
        ]);

        clearForm();
      }}
      >

        <FormField label="Nome da categoria" type="text" name="nome" value={dadosForm.nome} onChange={handleChange} />

        <FormField label="Descricao" type="textarea" name="descricao" value={dadosForm.descricao} onChange={handleChange} />

        <FormField label="Cor" type="color" name="cor" value={dadosForm.cor} onChange={handleChange} />

        {/* <div>
          <label>
            Descricao:
          <input
              name="descricao"
              type="text"
              value={dadosForm.descricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
          <input
              name="cor"
              type="color"
              value={dadosForm.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <Button>
          Cadastrar
        </Button>
      </form>
      {
        categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }
      <ul>
        {
          categorias.map((categoria) => (
            <li key={categoria.id}>
              {categoria.titulo}
            </li>
          ))
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
// import React from 'react';
// import PageDefault from '../../../components/PageDefault'
// import {Link} from 'react-router-dom';

// function CadastroCategoria(){
//     return(
//         <PageDefault>
//             <h1>Cadastro de categoria</h1>

//             <Link to="/">
//                 Ir para Home
//             </Link>
//         </PageDefault>
//     )
// }

// export default CadastroCategoria;
