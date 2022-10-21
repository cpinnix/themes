import { generateTheme as generate } from "./utils";
import darkTan from "@cpinnix/colors/darkTan";
import apricot from "@cpinnix/colors/apricot";

export default generate({
  name: "darkTan",
  primary: darkTan.swatch[500],
  secondary: darkTan.swatch[500],
  text: apricot.swatch[200],
});
