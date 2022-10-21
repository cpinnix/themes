import { generateTheme as generate } from "./utils";
import englishVermillion from "@cpinnix/colors/englishVermillion";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "englishVermillion",
  primary: englishVermillion.swatch[500],
  secondary: englishVermillion.swatch[500],
  text: mistyRose.swatch[400],
});
