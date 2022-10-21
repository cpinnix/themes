import { generateTheme as generate } from "./utils";
import redwood from "@cpinnix/colors/redwood";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "redwood",
  dark: true,
  primary: redwood.swatch[500],
  secondary: redwood.swatch[500],
  text: mistyRose.swatch[300],
});
