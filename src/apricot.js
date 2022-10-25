import { generateTheme as generate } from "./utils";
import { apricot, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "apricot",
  primary: apricot.swatch[500],
  secondary: apricot.swatch[500],
  text: blackCoffee.swatch[500],
});
