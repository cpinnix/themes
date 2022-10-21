import { generateTheme as generate } from "./utils";
import spanishGray from "@cpinnix/colors/spanishGray";
import antiFlashWhite from "@cpinnix/colors/antiFlashWhite";

export default generate({
  name: "spanishGray",
  primary: spanishGray.swatch[500],
  secondary: spanishGray.swatch[500],
  text: antiFlashWhite.swatch[500],
});
