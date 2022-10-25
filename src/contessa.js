import { generateTheme as generate } from "./utils";
import { contessa, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "contessa",
  primary: contessa.swatch[500],
  secondary: contessa.swatch[500],
  text: mistyRose.swatch[300],
});
