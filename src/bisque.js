import { generateTheme as generate } from "./utils";
import bisque from "@cpinnix/colors/bisque";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "bisque",
  primary: bisque.swatch[500],
  secondary: bisque.swatch[500],
  text: blackCoffee.swatch[400],
});
