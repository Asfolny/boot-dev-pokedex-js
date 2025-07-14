import { createInterface, type Interface } from "readline";
import { getCommands } from "./registry.js";
import { PokeAPI, type Pokemon } from "./pokeapi.js"

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>,
  pokeapi: PokeAPI,
  nextLocationsURL: string,
  prevLocationsURL?: string,
  pokedex: Record<string, Pokemon>
}

export function initState(cacheInterval: number): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });

  return {
    rl: rl,
    commands: getCommands(),
    pokeapi: new PokeAPI(cacheInterval),
    nextLocationsURL: "",
    prevLocationsURL: "",
    pokedex: {},
  }
}
