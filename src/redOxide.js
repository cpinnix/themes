import { generateTheme as generate } from "./utils";
import { redOxide, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "redOxide",
  dark: true,
  primary: redOxide.swatch[500],
  secondary: redOxide.swatch[500],
  text: mistyRose.swatch[500],
});
