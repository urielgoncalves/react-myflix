import config from '../config';

const URL = `${config.API_URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Nao foi possivel cadastrar os dados :(');
    });
}

export default {
  create,
};
