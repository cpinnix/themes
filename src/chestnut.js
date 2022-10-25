import { generateTheme as generate } from "./utils";
import { chestnut, mistyRose } from "@cpinnix/colors";

export default generate({
  name: "chestnut",
  dark: true,
  primary: chestnut.swatch[500],
  secondary: chestnut.swatch[500],
  text: mistyRose.swatch[500],
});
