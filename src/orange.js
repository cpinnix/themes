import { generateTheme as generate } from "./utils";
import { orange, sandDune } from "@cpinnix/colors";

export default generate({
  name: "orange",
  primary: orange.swatch[500],
  secondary: orange.swatch[500],
  text: sandDune.swatch[900],
});
