import showLoader from "../loader-pokemon.js"
import showMessage from "../message-pokemon.js"

const BASE_API_ID = "https://pokeapi.co/api/v2/"
const BASE_API_SPECIES = "https://pokeapi.co/api/v2/"

export async function getPokemonId(id){

  showLoader()
  
  try {
    const response = await fetch(`${BASE_API_ID}pokemon/${id}`)
    const data = response.json()

    if (response.status === 404) {
      showMessage()
    }

    if (response.ok) {
      return data
    }

  } catch (error) {
    if(response.status)
    console.error("Error al obtener respuesta API");
    console.error(error);
  }

}
export async function getPokemonSpecies(id){

  try {
    const response = await fetch(`${BASE_API_SPECIES}pokemon-species/${id}`)
    const data = response.json()

    return data

  } catch (error) {
    console.error("Error al obtener respuesta API");
    console.error(error);
  }

}