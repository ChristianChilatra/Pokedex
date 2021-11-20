const $containerPokemon = document.querySelector(".showPokemon")
const $loader = document.querySelector(".loader")
const $message = document.querySelector(".message")



export function showPokemon(response, counter) {

  const spriteOrder = []
  

  for (let el in response.sprites){
    switch (el) {
      case "front_default":
        spriteOrder.splice(0,0,{front_default : response.sprites[el]})
        break;
      case "back_default":
        spriteOrder.splice(1,0,{back_default : response.sprites[el]})
        break;
      case "front_female":
        spriteOrder.splice(2,0,{front_female : response.sprites[el]})
        break;
      case "back_female":
        spriteOrder.splice(3,0,{back_female : response.sprites[el]})
        break;
      case "front_shiny":
        spriteOrder.splice(4,0,{front_shiny : response.sprites[el]})
        break;
      case "back_shiny":
        spriteOrder.splice(5,0,{back_shiny : response.sprites[el]})
        break;
      case "front_shiny_female":
        spriteOrder.splice(6,0,{front_shiny_female : response.sprites[el]})
        break;
      case "back_shiny_female":
        spriteOrder.splice(7,0,{back_shiny_female : response.sprites[el]})
        break;
    }
  }

  spriteOrder.forEach((element, index) =>{
    if (Object.values(element)[0] === null) {
      spriteOrder.splice(index, 2)
    }
  })

  const valuesSprite = []
  
  spriteOrder.forEach((element) =>{
    valuesSprite.push(Object.values(element))
  })

  $message.innerHTML = ""
  $loader.style.display = "none"

  $containerPokemon.querySelector("img").setAttribute("src", ``)
  $containerPokemon.querySelector("img").setAttribute("src", `${valuesSprite[counter]}`)

}