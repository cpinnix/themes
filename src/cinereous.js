import { generateTheme as generate } from "./utils";
import cinereous from "@cpinnix/colors/cinereous";
import raindropsOnRoses from "@cpinnix/colors/raindropsOnRoses";

export default generate({
  name: "cinereous",
  primary: cinereous.swatch[500],
  secondary: cinereous.swatch[500],
  text: raindropsOnRoses.swatch[50],
});
