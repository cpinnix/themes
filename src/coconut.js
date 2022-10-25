import { generateTheme as generate } from "./utils";
import { coconut, appleBlossom } from "@cpinnix/colors";

export default generate({
  name: "coconut",
  primary: coconut.swatch[500],
  secondary: coconut.swatch[500],
  text: appleBlossom.swatch[300],
});
