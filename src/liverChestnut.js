import { generateTheme as generate } from "./utils";
import { liverChestnut, appleBlossom } from "@cpinnix/colors";

export default generate({
  name: "liverChestnut",
  primary: liverChestnut.swatch[500],
  secondary: liverChestnut.swatch[500],
  text: appleBlossom.swatch[300],
});
