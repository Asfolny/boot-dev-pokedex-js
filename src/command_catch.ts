import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    console.log(args.length);
    console.error("Catch needs a pokemon to catch")
  }

  const pokemon = args[0];
  console.log(`Throwing a Pokeball at ${pokemon}...`);
  const chance = Math.random() * 10;
  if (chance < 5) {
    console.log(`${pokemon} escaped!`);
    return;
  }

  console.log(`${pokemon} was caught!`);
}
