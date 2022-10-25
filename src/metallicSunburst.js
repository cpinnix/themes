import { generateTheme as generate } from "./utils";
import { metallicSunburst, blackOlive } from "@cpinnix/colors";

export default generate({
  name: "metallicSunburst",
  primary: metallicSunburst.swatch[500],
  secondary: metallicSunburst.swatch[500],
  text: blackOlive.swatch[1000],
});
