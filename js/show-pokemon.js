const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")
const $message = document.querySelector(".message")



export function showPokemon(response, counter) {
  
    const sprite = response.sprites    

  for (let el in sprite) {
    if (typeof (sprite[el]) != "string") {
      delete sprite[el]
    }
  }

  const spriteKey = Object.keys(sprite).reverse()

  $message.innerHTML = ""
  $loader.style.display = "none"

  $containerPokemon.querySelector("img").setAttribute("src", ``)
  $containerPokemon.querySelector("img").setAttribute("src", `${sprite[spriteKey[counter]]}`)

}