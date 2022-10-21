import { generateTheme as generate } from "./utils";
import beige from "@cpinnix/colors/beige";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "beige",
  primary: beige.swatch[500],
  secondary: beige.swatch[900],
  text: blackCoffee.swatch[500],
});
