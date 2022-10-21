import { generateTheme as generate } from "./utils";
import burntUmber from "@cpinnix/colors/burntUmber";
import blue from "@cpinnix/colors/blue";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "burntUmber",
  dark: true,
  primary: burntUmber.swatch[500],
  secondary: blue.swatch[500],
  text: mistyRose.swatch[500],
});
