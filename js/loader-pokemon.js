const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")

export default function showLoader(){
    
    $containerPokemon.querySelector("img").setAttribute("src", "")
    $loader.style.display = "flex"
}