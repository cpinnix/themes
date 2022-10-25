import { generateTheme as generate } from "./utils";
import { bronzeYellow, yellow } from "@cpinnix/colors";

export default generate({
  name: "bronzeYellow",
  primary: bronzeYellow.swatch[500],
  secondary: bronzeYellow.swatch[500],
  text: yellow.swatch[50],
});
