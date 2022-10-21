import { generateTheme as generate } from "./utils";
import black from "@cpinnix/colors/black";
import gray from "@cpinnix/colors/gray";
import blue from "@cpinnix/colors/blue";

export default generate({
  name: "dark",
  primary: black.swatch[300],
  secondary: blue.swatch[500],
  text: gray.swatch[100],
});
