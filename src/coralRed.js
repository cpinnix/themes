import { generateTheme as generate } from "./utils";
import { coralRed, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "coralRed",
  primary: coralRed.swatch[500],
  secondary: coralRed.swatch[500],
  text: mistyRose.swatch[200],
});
