import { generateTheme as generate } from "./utils";
import { flax, blackOlive } from "@cpinnix/colors";

export default generate({
  name: "flax",
  primary: flax.swatch[500],
  secondary: flax.swatch[500],
  text: blackOlive.swatch[1000],
});
