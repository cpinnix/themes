import { generateTheme as generate } from "./utils";
import { darkPuce, shilo } from "@cpinnix/colors";

export default generate({
  name: "darkPuce",
  dark: true,
  primary: darkPuce.swatch[500],
  secondary: darkPuce.swatch[500],
  text: shilo.swatch[300],
});
