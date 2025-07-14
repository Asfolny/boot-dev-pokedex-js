import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
import { getCommands } from "./registry.js";
import { type State } from "./state.js";

export function startREPL(state: State): void {
  console.log("Welcome to the Pokedex!");

  state.rl.prompt();

  state.rl.on("line", (line) => {
    const clean = cleanInput(line);
    if (clean.length < 1) {
      state.rl.prompt();
      return;
    }

    const cmd = clean[0];
    if (state.commands.hasOwnProperty(cmd)) {
      state.commands[cmd]["callback"](state);
    } else {
      console.log("Unknown command");
    }

    state.rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().split(" ").filter(n => n.length > 0);
}
