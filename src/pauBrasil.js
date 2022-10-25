import { generateTheme as generate } from "./utils";
import { pauBrasil, apricot } from "@cpinnix/colors";

export default generate({
  name: "pauBrasil",
  primary: pauBrasil.swatch[500],
  secondary: pauBrasil.swatch[500],
  text: apricot.swatch[300],
});
