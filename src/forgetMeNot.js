import { generateTheme as generate } from "./utils";
import forgetMeNot from "@cpinnix/colors/forgetMeNot";
import blackCoffee from "@cpinnix/colors/blackCoffee";

export default generate({
  name: "forgetMeNot",
  primary: forgetMeNot.swatch[500],
  secondary: forgetMeNot.swatch[500],
  text: blackCoffee.swatch[400],
});
