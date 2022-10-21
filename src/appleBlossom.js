import { generateTheme as generate } from "./utils";
import appleBlossom from "@cpinnix/colors/appleBlossom";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "appleBlossom",
  primary: appleBlossom.swatch[500],
  secondary: appleBlossom.swatch[500],
  text: blackCoffee.swatch[400],
});
