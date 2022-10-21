import { generateTheme as generate } from "./utils";
import liverChestnut from "@cpinnix/colors/liverChestnut";
import appleBlossom from "@cpinnix/colors/appleBlossom";

export default generate({
  name: "liverChestnut",
  primary: liverChestnut.swatch[500],
  secondary: liverChestnut.swatch[500],
  text: appleBlossom.swatch[300],
});
