import { generateTheme as generate } from "./utils";
import orange from "@cpinnix/colors/orange";
import sandDune from "@cpinnix/colors/sandDune";

export default generate({
  name: "orange",
  primary: orange.swatch[500],
  secondary: orange.swatch[500],
  text: sandDune.swatch[900],
});
