import { generateTheme as generate } from "./utils";
import pauBrasil from "@cpinnix/colors/pauBrasil";
import apricot from "@cpinnix/colors/apricot";

export default generate({
  name: "pauBrasil",
  primary: pauBrasil.swatch[500],
  secondary: pauBrasil.swatch[500],
  text: apricot.swatch[300],
});
