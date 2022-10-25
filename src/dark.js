import { generateTheme as generate } from "./utils";
import { black, gray, blue } from "@cpinnix/colors";

export default generate({
  name: "dark",
  primary: black.swatch[300],
  secondary: blue.swatch[500],
  text: gray.swatch[100],
});
