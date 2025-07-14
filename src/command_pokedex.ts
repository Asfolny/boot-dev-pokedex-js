import { type State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  if (Object.keys(state.pokedex).length === 0) {
    throw new Error("Your pokedex is empty!");
  }

  console.log("Your pokedex:");
  for (const name in state.pokedex) {
    console.log(`  - ${name}`);
  }
}
