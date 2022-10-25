import { generateTheme as generate } from "./utils";
import { bisque, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "bisque",
  primary: bisque.swatch[500],
  secondary: bisque.swatch[500],
  text: blackCoffee.swatch[400],
});
