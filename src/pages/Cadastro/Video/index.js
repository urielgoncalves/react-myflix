import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, dadosForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((allCategories) => {
        setCategorias(allCategories);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        // const categoryId = categorias.find((categoria) => categoria.titulo === dadosForm.categoria);

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
          suggestions={categoryTitles}
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
