import { generateTheme as generate } from "./utils";
import contessa from "@cpinnix/colors/contessa";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "contessa",
  primary: contessa.swatch[500],
  secondary: contessa.swatch[500],
  text: mistyRose.swatch[300],
});
