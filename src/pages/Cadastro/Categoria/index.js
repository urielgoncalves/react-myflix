import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const m = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  //const [nomeDaCategoria, setNomeDaCategoria] = useState('');
  const [dadosForm, setDadosForm] = useState(m);

  function handleDadosForm(key, value) {
    //chave: nome, descricao, cor
    setDadosForm({
      ...dadosForm,
      [key]: value //nome: 'valor'
    })
  }

  function handleChange(event) {
    handleDadosForm(
      event.target.getAttribute('name'),
      event.target.value
    );
    console.log(event);
    // const { getAttribute, value} = event.target;

    // handleDadosForm(
    //   getAttribute('name'),
    //   value
    // );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        //mantem as categorias existentes ... e adiciona a nova
        setCategorias([
          ...categorias,
          dadosForm
        ]);

        setDadosForm(m)
      }}>
        <div>
          <label>
            Nome da Categoria:
          <input
              name="nome"
              type="text"
              value={dadosForm.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
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
        </div>
        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {
          categorias.map((categoria, index) => {
            return (<li key={`${categoria.nome}${index}`}>
              {categoria.nome}
            </li>)
          }
          )
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
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