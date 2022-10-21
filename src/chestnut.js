import { generateTheme as generate } from "./utils";
import chestnut from "@cpinnix/colors/chestnut";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "chestnut",
  dark: true,
  primary: chestnut.swatch[500],
  secondary: chestnut.swatch[500],
  text: mistyRose.swatch[500],
});
