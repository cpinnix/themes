import { generateTheme as generate } from "./utils";
import { blackCoffee, raindropsOnRoses } from "@cpinnix/colors";

export default generate({
  name: "blackCoffee",
  primary: blackCoffee.swatch[500],
  secondary: blackCoffee.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
