import { generateTheme as generate } from "./utils";
import { beige, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "beige",
  primary: beige.swatch[500],
  secondary: beige.swatch[900],
  text: blackCoffee.swatch[500],
});
