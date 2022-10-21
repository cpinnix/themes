import { generateTheme as generate } from "./utils";
import cornsilk from "@cpinnix/colors/cornsilk";
import blackOlive from "@cpinnix/colors/blackOlive";

export default generate({
  name: "cornsilk",
  primary: cornsilk.swatch[500],
  secondary: cornsilk.swatch[500],
  text: blackOlive.swatch[1000],
});
