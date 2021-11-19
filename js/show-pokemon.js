const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")
const $message = document.querySelector(".message")



export function showPokemon(response) {
  
  let counter = 0

  const sprite = response.sprites

  for (let el in sprite) {
    if (typeof (sprite[el]) != "string") {
      delete sprite[el]
    }
  }

  if (counter > Object.values(sprite).length - 1) {
    counter = Object.values(sprite).length - 1
  }
  if (counter < 0) {
    counter = 0
  }

  const spriteKey = Object.keys(sprite).reverse()

  $message.innerHTML = ""
  $loader.style.display = "none"

  setImagePokemon(sprite, spriteKey, counter)
  setAddEventListener()

  function setAddEventListener() {
    const $navegation = document.querySelector(".pokemonSwitch")
    const $buttonUp = $navegation.querySelector(".button.up")
    const $buttonDown = $navegation.querySelector(".button.down")

    $buttonUp.removeEventListener("click", nextPokemon)
    $buttonDown.removeEventListener("click", prevPokemon)
    $buttonUp.addEventListener("click", nextPokemon)
    $buttonDown.addEventListener("click", prevPokemon)
  }


  function nextPokemon() {
    console.log(counter);
    counter++
    setImagePokemon(sprite, spriteKey, counter)
  }
  function prevPokemon() {
    console.log(counter);
    counter--
    setImagePokemon(sprite, spriteKey, counter)
  }
}

function setImagePokemon(sprite, spriteKey, counter) {
  $containerPokemon.querySelector("img").setAttribute("src", ``)
  $containerPokemon.querySelector("img").setAttribute("src", `${sprite[spriteKey[counter]]}`)
}