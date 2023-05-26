import '../css/fetch-api.css';
import API from './05-fetch-api/api-service';
import markUP from './05-fetch-api/markup-card';
import getRefs from './05-fetch-api/refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markUp = markUP.markUpCards(pokemon);
  refs.cardContainer.innerHTML = markUp;
}

function onFetchError(error) {
  alert('Упс, щось пішло не так, ми не знайшли Вашого покемона!');
}
