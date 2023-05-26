function markUpCards({ sprites, name, weight, abilities }) {
  return `<div class="card">
  <div class="card-img-top">
  <img src="${sprites.front_default}" alt="${name}"/>
  </div>
  <div class="card-body">
  <h2 class="card-title">Имя: ${name}</h2>
  <p class="card-text">Вес: ${weight}</p>
  <p class="card-text"><b>Умения</b></p>
  <ul class="list-group"></ul>
    <li class="list-group-item">${abilities[0].ability.name}</li>
    <li class="list-group-item">${abilities[1].ability.name}</li>
  </ul>
  </div>
</div>`;
}

export default { markUpCards };
