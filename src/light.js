import { generateTheme as generate } from "./utils";
import { antiFlashWhite, blue, gray } from "@cpinnix/colors";

export default generate({
  name: "light",
  primary: antiFlashWhite.swatch[500],
  secondary: blue.swatch[500],
  text: gray.swatch[1000],
});
