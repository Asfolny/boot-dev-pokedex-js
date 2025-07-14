import { type State } from "./state.js";

export async function startREPL(state: State): Promise<void> {
  console.log("Welcome to the Pokedex!");
  state.rl.prompt();

  state.rl.on("line", async (line) => {
    const clean = cleanInput(line);
    if (clean.length < 1) {
      state.rl.prompt();
      return;
    }

    const cmd = clean[0];
    if (!state.commands.hasOwnProperty(cmd)) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    try {
      await state.commands[cmd]["callback"](state);
    } catch (e) {
      console.log((e as Error).message);
    }

    state.rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().split(" ").filter(n => n.length > 0);
}
