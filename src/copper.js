import { generateTheme as generate } from "./utils";
import { copper, raindropsOnRoses } from "@cpinnix/colors";

export default generate({
  name: "copper",
  primary: copper.swatch[500],
  secondary: copper.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
