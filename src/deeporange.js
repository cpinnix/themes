import { generateTheme as generate } from "./utils";
import deeporange from "@cpinnix/colors/deeporange";
import white from "@cpinnix/colors/white";

export default generate({
  name: "deeporange",
  primary: deeporange.swatch[500],
  secondary: deeporange.swatch[500],
  text: white.swatch[500],
});
