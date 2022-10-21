import { generateTheme as generate } from "./utils";
import sepia from "@cpinnix/colors/sepia";
import brownYellow from "@cpinnix/colors/brownYellow";

export default generate({
  name: "sepia",
  primary: sepia.swatch[500],
  secondary: sepia.swatch[500],
  text: brownYellow.swatch[200],
});
