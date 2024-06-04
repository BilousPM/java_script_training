const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonId(id) {
  const url = `${BASE_URL}/pokemon/${id}`;
  return fetch(url).then(response => {
    // console.log(response);
    return response.json();
  });
}

export default {
  fetchPokemonId,
};
