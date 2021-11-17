const BASE_API_ID = "https://pokeapi.co/api/v2/"
const BASE_API_SPECIES = "https://pokeapi.co/api/v2/"

export async function getPokemonId(id){

  try {
    const response = await fetch(`${BASE_API_ID}pokemon/${id}`)
    const data = response.json()

    return data

  } catch (error) {
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