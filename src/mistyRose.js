import { generateTheme as generate } from "./utils";
import mistyRose from "@cpinnix/colors/mistyRose";
import contessa from "@cpinnix/colors/contessa";

export default generate({
  name: "mistyRose",
  primary: mistyRose.swatch[500],
  secondary: mistyRose.swatch[900],
  text: contessa.swatch[900],
});
