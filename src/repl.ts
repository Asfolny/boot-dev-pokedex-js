import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
import { getCommands } from "./registry.js";

export function startREPL(): void {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
  });

  const cmds = getCommands();
  console.log("Welcome to the Pokedex!");

  rl.prompt();

  rl.on("line", (line) => {
    const clean = cleanInput(line);
    if (clean.length < 1) {
      rl.prompt();
      return;
    }

    const cmd = clean[0];
    if (cmds.hasOwnProperty(cmd)) {
      cmds[cmd]["callback"](cmds);
    } else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().split(" ").filter(n => n.length > 0);
}
