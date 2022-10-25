import { generateTheme as generate } from "./utils";
import { deeporange, white } from "@cpinnix/colors";

export default generate({
  name: "deeporange",
  primary: deeporange.swatch[500],
  secondary: deeporange.swatch[500],
  text: white.swatch[500],
});
