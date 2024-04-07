const obtenerValorInput = () => {
  let inputTexto = document.getElementById('input_pokemon');
  let valor = inputTexto.value;
  peticionApi(valor);
};

const peticionApi = (pokemon) => {
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const enpoint = `pokemon/${pokemon}`;
  const url = `${baseUrl}${enpoint}`;

  axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
};

const printData = (data) => {
  let respuesta = document.getElementById('show_info');
  respuesta.innerHTML = `
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <ul id="pokemon-stats">
        <p>Type: ${data.types[0].type.name}</p>
        <p>HP: ${data.stats[0].base_stat}</p>  
        <p>Attack: ${data.stats[1].base_stat}</p>
        <p>Defense: ${data.stats[2].base_stat}</p>
        <p>Special Attack: ${data.stats[3].base_stat}</p>
        <p>Special Defense: ${data.stats[4].base_stat}</p>
        <p>Speed: ${data.stats[5].base_stat}</p>
    </ul>
  `;
};
