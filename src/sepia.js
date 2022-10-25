import { generateTheme as generate } from "./utils";
import { sepia, brownYellow } from "@cpinnix/colors";

export default generate({
  name: "sepia",
  primary: sepia.swatch[500],
  secondary: sepia.swatch[500],
  text: brownYellow.swatch[200],
});
