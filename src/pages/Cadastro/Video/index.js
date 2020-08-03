import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, dadosForm } = useForm({
    titulo: 'Encontrando o MAIOR e o MENOR elemento numa ÁRVORE Binária de Busca | Estruturas de Dados #15',
    url: 'https://www.youtube.com/watch?v=Q9s_XyJpHTI&list=PL5TJqBvpXQv5Bb71AE5Cd_kB5rNsfU4Cp&index=18',
    categoria: 'Back End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video cadastrado com sucesso');
        videosRepository.create({
          titulo: dadosForm.titulo,
          url: dadosForm.url,
          categoriaId: 1,
        }).then(() => {
          console.log('Cadastado com sucesso');
          history.push('/');
        }).catch((err) => {
          console.log(err);
        });
      }}
      >
        <FormField
          label="Titulo do video"
          name="titulo"
          value={dadosForm.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={dadosForm.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={dadosForm.categoria}
          onChange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
