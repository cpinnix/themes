import { generateTheme as generate } from "./utils";
import { mistyRose, red } from "@cpinnix/colors";

export default generate({
  name: "red",
  primary: red.swatch[500],
  secondary: red.swatch[500],
  text: mistyRose.swatch[200],
});
