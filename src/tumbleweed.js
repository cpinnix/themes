import { generateTheme as generate } from "./utils";
import { tumbleweed, raindropsOnRoses } from "@cpinnix/colors";

export default generate({
  name: "tumbleweed",
  primary: tumbleweed.swatch[700],
  secondary: tumbleweed.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
