import { generateTheme as generate } from "./utils";
import bronzeYellow from "@cpinnix/colors/bronzeYellow";
import yellow from "@cpinnix/colors/yellow";

export default generate({
  name: "bronzeYellow",
  primary: bronzeYellow.swatch[500],
  secondary: bronzeYellow.swatch[500],
  text: yellow.swatch[50],
});
