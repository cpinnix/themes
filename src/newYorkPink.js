import { generateTheme as generate } from "./utils";
import { newYorkPink, antiFlashWhite } from "@cpinnix/colors";

export default generate({
  name: "newYorkPink",
  primary: newYorkPink.swatch[500],
  secondary: newYorkPink.swatch[500],
  text: antiFlashWhite.swatch[100],
});
