const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")
const $message = document.querySelector(".message")

export default function showPokemon(response) {

  let counter = 0

  const sprite = response.sprites

  for (let el in sprite) {
    if (typeof (sprite[el]) != "string") {
      delete sprite[el]
    }
  }

  const spriteKey = Object.keys(sprite).reverse()

  console.log(spriteKey);

  $message.innerHTML = ""
  $loader.style.display = "none"

  $containerPokemon.querySelector("img").setAttribute("src", ``)
  $containerPokemon.querySelector("img").setAttribute("src", `${sprite[spriteKey[counter]]}`)
}
