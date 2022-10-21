import { generateTheme as generate } from "./utils";
import darkPuce from "@cpinnix/colors/darkPuce";
import shilo from "@cpinnix/colors/shilo";

export default generate({
  name: "darkPuce",
  dark: true,
  primary: darkPuce.swatch[500],
  secondary: darkPuce.swatch[500],
  text: shilo.swatch[300],
});
