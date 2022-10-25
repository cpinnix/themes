import { generateTheme as generate } from "./utils";
import { raindropsOnRoses, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "raindropsOnRoses",
  primary: raindropsOnRoses.swatch[500],
  secondary: raindropsOnRoses.swatch[500],
  text: blackCoffee.swatch[400],
});
