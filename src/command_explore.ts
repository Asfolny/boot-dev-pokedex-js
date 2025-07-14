import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    console.log(args.length);
    console.error("Explore needs location")
  }

  const location = await state.pokeapi.fetchLocation(args[0]);

  for (const enc of location.pokemon_encounters) {
    console.log(` - ${enc.pokemon.name}`);
  }
}


