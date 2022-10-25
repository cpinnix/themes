import { generateTheme as generate } from "./utils";
import { desertSand, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "desertSand",
  primary: desertSand.swatch[500],
  secondary: desertSand.swatch[500],
  text: blackCoffee.swatch[1000],
});
