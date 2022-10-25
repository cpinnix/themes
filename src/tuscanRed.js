import { generateTheme as generate } from "./utils";
import { tuscanRed, shilo } from "@cpinnix/colors";

export default generate({
  name: "tuscanRed",
  dark: true,
  primary: tuscanRed.swatch[500],
  secondary: tuscanRed.swatch[500],
  text: shilo.swatch[100],
});
