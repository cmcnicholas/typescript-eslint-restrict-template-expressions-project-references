import { Dragon } from "@project-a/Dragon";

export function main() {
  const dragon = new Dragon();

  // IDE and tsc correctly identify dragon.sound as string
  console.log('dragoing goes' + dragon.sound);

  // template here believes .sound resolves to "any"
  console.log(`dragon goes ${dragon.sound}`);
}
