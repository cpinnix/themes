import { generateTheme as generate } from "./utils";
import { darkTan, apricot } from "@cpinnix/colors";

export default generate({
  name: "darkTan",
  primary: darkTan.swatch[500],
  secondary: darkTan.swatch[500],
  text: apricot.swatch[200],
});
