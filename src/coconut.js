import { generateTheme as generate } from "./utils";
import coconut from "@cpinnix/colors/coconut";
import appleBlossom from "@cpinnix/colors/appleBlossom";

export default generate({
  name: "coconut",
  primary: coconut.swatch[500],
  secondary: coconut.swatch[500],
  text: appleBlossom.swatch[300],
});
