import { generateTheme as generate } from "./utils";
import brown from "@cpinnix/colors/brown";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";

export default generate({
  name: "brown",
  primary: brown.swatch[500],
  secondary: brown.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
