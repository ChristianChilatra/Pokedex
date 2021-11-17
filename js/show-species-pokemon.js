
const $containerSpeciesPokemon = document.querySelector(".pokemonInfo")

export default function showSpeciesPokemon(response) {

  const resultFind = response.find((element) => {
    return element.language.name === "es"
  })

  $containerSpeciesPokemon.textContent = `${resultFind.flavor_text}`
}