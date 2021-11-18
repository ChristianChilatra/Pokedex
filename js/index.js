import { getPokemonId, getPokemonSpecies} from "./service/data.js"
import showPokemon from "./show-pokemon.js"
import showSpeciesPokemon from "./show-species-pokemon.js"


const $formulario = document.querySelector("#form")

getPokemon()

function  getPokemon() {
  $formulario.addEventListener("submit", async (event) =>{
    event.preventDefault()
    const form = new FormData($formulario)
    const id = form.get("selectedPokemon")

    try {
      const pokemonId = await getPokemonId(id)
      const pokemonSpecies = await getPokemonSpecies(id)

      showPokemon(pokemonId)
      showSpeciesPokemon(pokemonSpecies.flavor_text_entries)

    } catch (error) {
      console.error(`No se logro obtener Pokemon con el ID ${id}`);
      console.error(error);
    }


  })
}