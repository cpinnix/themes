import { generateTheme as generate } from "./utils";
import { deepTaupe, shilo } from "@cpinnix/colors";

export default generate({
  name: "deepTaupe",
  primary: deepTaupe.swatch[500],
  secondary: deepTaupe.swatch[500],
  text: shilo.swatch[100],
});
