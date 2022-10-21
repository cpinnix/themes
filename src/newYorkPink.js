import { generateTheme as generate } from "./utils";
import newYorkPink from "@cpinnix/colors/newYorkPink";
import antiFlashWhite from "@cpinnix/colors/antiFlashWhite";

export default generate({
  name: "newYorkPink",
  primary: newYorkPink.swatch[500],
  secondary: newYorkPink.swatch[500],
  text: antiFlashWhite.swatch[100],
});
