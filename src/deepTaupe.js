import { generateTheme as generate } from "./utils";
import deepTaupe from "@cpinnix/colors/deepTaupe";
import shilo from "@cpinnix/colors/shilo";

export default generate({
  name: "deepTaupe",
  primary: deepTaupe.swatch[500],
  secondary: deepTaupe.swatch[500],
  text: shilo.swatch[100],
});
