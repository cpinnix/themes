import { generateTheme as generate } from "./utils";
import desertSand from "@cpinnix/colors/desertSand";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "desertSand",
  primary: desertSand.swatch[500],
  secondary: desertSand.swatch[500],
  text: blackCoffee.swatch[1000],
});
