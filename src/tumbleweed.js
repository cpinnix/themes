import { generateTheme as generate } from "./utils";
import tumbleweed from "@cpinnix/colors/tumbleweed";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";

export default generate({
  name: "tumbleweed",
  primary: tumbleweed.swatch[700],
  secondary: tumbleweed.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
