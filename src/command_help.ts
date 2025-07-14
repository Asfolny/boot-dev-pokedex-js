import { type State } from "./state.js"

export function commandHelp(state: State): void {
  console.log("Usage:\n");

  for (const key in state.commands) {
    const cmd = state.commands[key];
    console.log(`${cmd.name}: ${cmd.description}`);
  }
}
