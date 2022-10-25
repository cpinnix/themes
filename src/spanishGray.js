import { generateTheme as generate } from "./utils";
import { spanishGray, antiFlashWhite } from "@cpinnix/colors";

export default generate({
  name: "spanishGray",
  primary: spanishGray.swatch[500],
  secondary: spanishGray.swatch[500],
  text: antiFlashWhite.swatch[500],
});
