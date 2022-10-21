import { generateTheme as generate } from "./utils";
import brownYellow from "@cpinnix/colors/brownYellow";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "brownYellow",
  primary: brownYellow.swatch[500],
  secondary: brownYellow.swatch[500],
  text: blackCoffee.swatch[700],
});
