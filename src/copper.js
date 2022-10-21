import { generateTheme as generate } from "./utils";
import copper from "@cpinnix/colors/copper";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";

export default generate({
  name: "copper",
  primary: copper.swatch[500],
  secondary: copper.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
