import { generateTheme as generate } from "./utils";
import tuscanRed from "@cpinnix/colors/tuscanRed";
import shilo from "@cpinnix/colors/shilo";

export default generate({
  name: "tuscanRed",
  dark: true,
  primary: tuscanRed.swatch[500],
  secondary: tuscanRed.swatch[500],
  text: shilo.swatch[100],
});
