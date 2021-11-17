
const $containerPokemon = document.querySelector(".showPokemon")

export default function showPokemon(response){
  $containerPokemon.querySelector("img").setAttribute("src", `${response}`)
}