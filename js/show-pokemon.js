
import {selectedPosition} from "./utils/dicctionary.js";

const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")
const $message = document.querySelector(".message")

export default function showPokemon(response){
  
  $message.innerHTML = ""
  $loader.style.display = "none"
  $containerPokemon.querySelector("img").setAttribute("src", `${response.sprites.front_default}`)


  const $navegation = document.querySelector(".pokemonSwitch")
  
  const $buttonUp = $navegation.querySelector(".button.up")
  const $buttonDown = $navegation.querySelector(".button.down")
  // const $buttonLeft = $navegation.querySelector(".button.left")
  // const $buttonRigth = $navegation.querySelector(".button.rigth")

  let count = 0
  
  $buttonUp.addEventListener("click", ()=>{
    // const findSprite = Object.keys(response.sprites).find((element, index) => {
    //   return element === selectedPosition[count]
    // })
    // const findSprite = Object(response.sprites).find((element, index) => {
    //   return element === selectedPosition[count]
    // })
    let directionSprites = Object.values(response.sprites)
    console.log(directionSprites);
    directionSprites = directionSprites.filter(element => typeof(element) == String)
    console.log(directionSprites);
    // $containerPokemon.querySelector("img").setAttribute("src", `${response.sprites}.${selectedPosition[count]}`)
    count++
  })
}
