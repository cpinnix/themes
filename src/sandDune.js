import { generateTheme as generate } from "./utils";
import { sandDune, antiFlashWhite } from "@cpinnix/colors";

export default generate({
  name: "sandDune",
  primary: sandDune.swatch[500],
  secondary: sandDune.swatch[500],
  text: antiFlashWhite.swatch[200],
});
