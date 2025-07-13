export function cleanInput(input: string): string[] {
  return input.split(" ").filter(n => n.length > 0);
}
