import { CLICommand } from "./registry.js"

export function commandHelp(cmds: Record<string, CLICommand>): void {
  console.log("Usage:\n");

  for (const key in cmds) {
    const cmd = cmds[key];
    console.log(`${cmd.name}: ${cmd.description}`);
  }
}
