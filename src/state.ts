import { createInterface, type Interface } from "readline";
import { getCommands } from "./registry.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (stte: State) => void;
}

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>
}

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });

  return {
    "rl": rl,
    "commands": getCommands(),
  }
}
