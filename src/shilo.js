import { generateTheme as generate } from "./utils";
import shilo from "@cpinnix/colors/shilo";
import tuscanRed from "@cpinnix/colors/tuscanRed";

export default generate({
  name: "shilo",
  primary: shilo.swatch[500],
  secondary: shilo.swatch[500],
  text: tuscanRed.swatch[1000],
});
