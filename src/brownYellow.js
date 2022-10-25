import { generateTheme as generate } from "./utils";
import { brownYellow, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "brownYellow",
  primary: brownYellow.swatch[500],
  secondary: brownYellow.swatch[500],
  text: blackCoffee.swatch[700],
});
