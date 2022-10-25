import { generateTheme as generate } from "./utils";
import { mistyRose, contessa } from "@cpinnix/colors";

export default generate({
  name: "mistyRose",
  primary: mistyRose.swatch[500],
  secondary: mistyRose.swatch[900],
  text: contessa.swatch[900],
});
