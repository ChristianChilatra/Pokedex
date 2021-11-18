const $containerPokemon = document.querySelector(".showPokemon")
const $containerSpeciesPokemon = document.querySelector(".pokemonInfo")
const $message = document.querySelector(".message")
const $loader = document.querySelector(".loader")

export default function showMessage(){

    $containerPokemon.querySelector("img").setAttribute("src", "")
    $loader.style.display = "none"
    $message.textContent = "Pokemon no encontrado"
    $containerSpeciesPokemon.textContent = "Descripcion no encontrada"
}