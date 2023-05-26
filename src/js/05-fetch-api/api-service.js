const BASE_URL = 'https://pokeapi.co/api/v2';
function fetchPokemon(pokemonID) {
  return fetch(`${BASE_URL}/pokemon/${pokemonID}`).then(response => {
    return response.json();
  });
}

export default { fetchPokemon };
