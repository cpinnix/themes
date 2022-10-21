import { generateTheme as generate } from "./utils";
import blackCoffee from "@cpinnix/colors/blackCoffee";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";

export default generate({
  name: "blackCoffee",
  primary: blackCoffee.swatch[500],
  secondary: blackCoffee.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
