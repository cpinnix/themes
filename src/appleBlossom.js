import { generateTheme as generate } from "./utils";
import { appleBlossom, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "appleBlossom",
  primary: appleBlossom.swatch[500],
  secondary: appleBlossom.swatch[500],
  text: blackCoffee.swatch[400],
});
