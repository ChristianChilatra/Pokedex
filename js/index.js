import { getPokemonId, getPokemonSpecies } from "./service/data.js"
import { showPokemon } from "./show-pokemon.js"
import showSpeciesPokemon from "./show-species-pokemon.js"
import {setStats} from "./show-stats.js"


const $formulario = document.querySelector("#form")

const ctx = document.getElementById('stats').getContext('2d');
let myChart = new Chart(ctx,{})
myChart.destroy()

let counter
let id
let { responseId, responseSpecies } = {}

$formulario.addEventListener("submit", async (event) => {

  const form = new FormData($formulario)
  event.preventDefault()
  id = form.get("selectedPokemon")

  const { pokemonId, pokemonSpecies } = await getPokemon(id)

  responseId = pokemonId
  responseSpecies = pokemonSpecies

  counter = 0

  showPokemon(pokemonId, counter)
  showSpeciesPokemon(pokemonSpecies)

  myChart.destroy()
  myChart = new Chart(ctx,setStats(pokemonId))

})

const $navegation = document.querySelector(".pokemonSwitch")
const $buttonUp = $navegation.querySelector(".button.up")
const $buttonDown = $navegation.querySelector(".button.down")
const $buttonLeft = $navegation.querySelector(".button.left")
const $buttonRigth = $navegation.querySelector(".button.rigth")
const $buttonReset = document.querySelector(".resetView")

$buttonUp.addEventListener("click", nextColorPokemon)
$buttonDown.addEventListener("click", prevColorPokemon)
$buttonLeft.addEventListener("click", prevPokemon)
$buttonRigth.addEventListener("click", nextPokemon)
$buttonReset.addEventListener("click", randomPokemon)


async function randomPokemon() {

  id = Math.floor(Math.random()* 899)

  const { pokemonId, pokemonSpecies } = await getPokemon(id)

  responseId = pokemonId
  responseSpecies = pokemonSpecies

  counter = 0

  showPokemon(pokemonId, counter)
  showSpeciesPokemon(pokemonSpecies)

  myChart.destroy()
  myChart = new Chart(ctx,setStats(pokemonId))

  $formulario.querySelector("#selectedPokemon").value = `${id}`
}

function nextColorPokemon() {
  if (counter >= Object.values(responseId.sprites).filter(el => typeof(el) === "string").length - 1) {
    counter = Object.values(responseId.sprites).filter(el => typeof(el) === "string").length - 1
  }else{
    counter++
  }
  showPokemon(responseId, counter)
}
function prevColorPokemon() {
  if (counter <= 0) {
    counter = 0
  }else{
    counter--
  }
  showPokemon(responseId, counter)
}

async function nextPokemon (){

  id++

  const { pokemonId, pokemonSpecies } = await getPokemon(id)

  responseId = pokemonId
  responseSpecies = pokemonSpecies

  counter = 0

  showPokemon(pokemonId, counter)
  showSpeciesPokemon(pokemonSpecies)

  myChart.destroy()
  myChart = new Chart(ctx,setStats(pokemonId))

  $formulario.querySelector("#selectedPokemon").value = `${id}`

}

async function prevPokemon (){

  id--

  if (id <= 0) {
    id = 1
  }

  const { pokemonId, pokemonSpecies } = await getPokemon(id)

  responseId = pokemonId
  responseSpecies = pokemonSpecies

  counter = 0

  showPokemon(pokemonId, counter)
  showSpeciesPokemon(pokemonSpecies)
  
  myChart.destroy()
  myChart = new Chart(ctx,setStats(pokemonId))

  $formulario.querySelector("#selectedPokemon").value = `${id}`
}

async function getPokemon(id) {

  let pokemonId
  let pokemonSpecies

  try {
    pokemonId = await getPokemonId(id)
    pokemonSpecies = await getPokemonSpecies(id)

  } catch (error) {
    console.error(`No se logro obtener Pokemon con el ID ${id}`);
    console.error(error);
  }

  return { pokemonId, pokemonSpecies }
}