import { generateTheme as generate } from "./utils";
import coralRed from "@cpinnix/colors/coralRed";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "coralRed",
  primary: coralRed.swatch[500],
  secondary: coralRed.swatch[500],
  text: mistyRose.swatch[200],
});
