import { generateTheme as generate } from "./utils";
import auburn from "@cpinnix/colors/auburn";
import mistyRose from "@cpinnix/colors/mistyRose";

export default generate({
  name: "auburn",
  dark: true,
  primary: auburn.swatch[500],
  secondary: auburn.swatch[500],
  text: mistyRose.swatch[200],
});
