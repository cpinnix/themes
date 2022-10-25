import { generateTheme as generate } from "./utils";
import { cornsilk, blackOlive } from "@cpinnix/colors";

export default generate({
  name: "cornsilk",
  primary: cornsilk.swatch[500],
  secondary: cornsilk.swatch[500],
  text: blackOlive.swatch[1000],
});
