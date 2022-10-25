import { generateTheme as generate } from "./utils";
import { forgetMeNot, blackCoffee } from "@cpinnix/colors";

export default generate({
  name: "forgetMeNot",
  primary: forgetMeNot.swatch[500],
  secondary: forgetMeNot.swatch[500],
  text: blackCoffee.swatch[400],
});
