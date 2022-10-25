import { generateTheme as generate } from "./utils";
import { brown, raindropsOnRoses } from "@cpinnix/colors";

export default generate({
  name: "brown",
  primary: brown.swatch[500],
  secondary: brown.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
