import config from '../config';

const CATEGORIES_URL = `${config.API_URL}/categorias`;

function getAllWithVideos() {
  console.log(config.API_URL);

  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Nao foi possivel pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
};
