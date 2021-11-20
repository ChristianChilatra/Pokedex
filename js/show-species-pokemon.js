
const $containerSpeciesPokemon = document.querySelector(".pokemonInfo")
const $ledMain = document.querySelector(".ledMain")

export default function showSpeciesPokemon(response) {

  speechSynthesis.cancel()

  const resultFind = response.flavor_text_entries.find((element) => {
    return element.language.name === "es"
  })

  const name = new SpeechSynthesisUtterance(response.name);
  const species = new SpeechSynthesisUtterance(resultFind.flavor_text);
  
  species.rate = 1.5
  name.addEventListener("start",()=>{
    $ledMain.classList.add("is-animated")
  })
  name.addEventListener("end",()=>{
    $ledMain.classList.remove("is-animated")
  })
  species.addEventListener("start",()=>{
    $ledMain.classList.add("is-animated")
  })
  species.addEventListener("end",()=>{
    $ledMain.classList.remove("is-animated")
  })
  speechSynthesis.speak(name);
  speechSynthesis.speak(species);


  $containerSpeciesPokemon.textContent = `${resultFind.flavor_text}`
}