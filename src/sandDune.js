import { generateTheme as generate } from "./utils";
import sandDune from "@cpinnix/colors/sandDune";
import antiFlashWhite from "@cpinnix/colors/antiFlashWhite";

export default generate({
  name: "sandDune",
  primary: sandDune.swatch[500],
  secondary: sandDune.swatch[500],
  text: antiFlashWhite.swatch[200],
});
