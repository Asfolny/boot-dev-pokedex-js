import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";

export function startREPL(): void {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
  });

  rl.prompt();

  rl.on("line", (line) => {
    const clean = cleanInput(line);
    if (clean.length < 1) {
      rl.prompt();
      return;
    }

    console.log(`Your command was: ${clean[0]}`);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.split(" ").filter(n => n.length > 0);
}
