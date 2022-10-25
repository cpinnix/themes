import { generateTheme as generate } from "./utils";
import { shilo, tuscanRed } from "@cpinnix/colors";

export default generate({
  name: "shilo",
  primary: shilo.swatch[500],
  secondary: shilo.swatch[500],
  text: tuscanRed.swatch[1000],
});
