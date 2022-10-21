import { generateTheme as generate } from "./utils";
import apricot from "@cpinnix/colors/apricot";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "apricot",
  primary: apricot.swatch[500],
  secondary: apricot.swatch[500],
  text: blackCoffee.swatch[500],
});
