import { generateTheme as generate } from "./utils";
import { cinereous, raindropsOnRoses } from "@cpinnix/colors";

export default generate({
  name: "cinereous",
  primary: cinereous.swatch[500],
  secondary: cinereous.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
