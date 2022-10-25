import { generateTheme as generate } from "./utils";
import { burntUmber, blue, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "burntUmber",
  dark: true,
  primary: burntUmber.swatch[500],
  secondary: blue.swatch[500],
  text: mistyRose.swatch[500],
});
