import { generateTheme as generate } from "./utils";
import { amber, blackOlive } from "@cpinnix/colors";

export default generate({
  name: "amber",
  primary: amber.swatch[500],
  secondary: amber.swatch[500],
  text: blackOlive.swatch[1000],
});
