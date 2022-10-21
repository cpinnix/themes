import { generateTheme as generate } from "./utils";
import antiFlashWhite from "@cpinnix/colors/antiFlashWhite";
import blue from "@cpinnix/colors/blue";
import gray from "@cpinnix/colors/gray";

export default generate({
  name: "light",
  primary: antiFlashWhite.swatch[500],
  secondary: blue.swatch[500],
  text: gray.swatch[1000],
});
