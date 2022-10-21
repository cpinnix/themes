import { generateTheme as generate } from "./utils";
import flax from "@cpinnix/colors/flax";
import blackOlive from "@cpinnix/colors/blackOlive";

export default generate({
  name: "flax",
  primary: flax.swatch[500],
  secondary: flax.swatch[500],
  text: blackOlive.swatch[1000],
});
