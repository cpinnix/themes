import { generateTheme as generate } from "./utils";
import { redwood, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "redwood",
  dark: true,
  primary: redwood.swatch[500],
  secondary: redwood.swatch[500],
  text: mistyRose.swatch[300],
});
