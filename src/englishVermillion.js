import { generateTheme as generate } from "./utils";
import { englishVermillion, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "englishVermillion",
  primary: englishVermillion.swatch[500],
  secondary: englishVermillion.swatch[500],
  text: mistyRose.swatch[400],
});
