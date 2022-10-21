import { generateTheme as generate } from "./utils";
import red from "@cpinnix/colors/red";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "red",
  primary: red.swatch[500],
  secondary: red.swatch[500],
  text: mistyRose.swatch[200],
});
