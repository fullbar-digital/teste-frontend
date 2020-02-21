// API endpoint --------------------------------------------
var baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

// Get Elements --------------------------------------------
const inicioInput = getElementById('.inicio-input')
const fimInput = getElementById('.fim-button')
const container = getElementById('.pokemon')
const erroMessage = getElementById('.error')

var pokeName // Nome ou numero passado na caixa de busca
var pokemon // Responsavel por guardar os dados recebidos da API
var card // Responsavel por receber o HTML 

// Build Functions --------------------------------------------
if (inicioInput.value.length == 0 || fimInput.value.length == 0) {
  alertfimInput('[ERRO] Verifique os dados e tente novamente!')
  // res.innerHTML = 'Tente novamente'

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
  card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
    </div>`;
  return card;
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
    //Exibe uma mensagem caso o pokemon pesquisado não exista
    if(pokemon.detail) {
      erroMessage.style.display = 'block';
      container.style.display = 'none';
    }else{
      erroMessage.style.display = 'none';
      container.style.display = 'flex';
      container.innerHTML = createCard();
    }
  }, 2000);
}

// Add Events --------------------------------------------
inicioButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = inicioInput.value.toLowerCase();
  startApp(pokeName);
  container.classList.add('fade');

  // // Reseta o efeito fade removendo a classe fade
  // setTimeout(() => {
  //   container.classList.remove('fade');
  // }, 1000);
});