import { generateTheme as generate } from "./utils";
import metallicSunburst from "@cpinnix/colors/metallicSunburst";
import blackOlive from "@cpinnix/colors/blackOlive";

export default generate({
  name: "metallicSunburst",
  primary: metallicSunburst.swatch[500],
  secondary: metallicSunburst.swatch[500],
  text: blackOlive.swatch[1000],
});
