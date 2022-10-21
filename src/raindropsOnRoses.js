import { generateTheme as generate } from "./utils";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "raindropsOnRoses",
  primary: raindropsOnRoses.swatch[500],
  secondary: raindropsOnRoses.swatch[500],
  text: blackCoffee.swatch[400],
});
