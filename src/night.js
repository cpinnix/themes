import { generateTheme as generate } from "./utils";
import { black, gray, blue } from "@cpinnix/colors";
import chroma from "chroma-js";

const backgroundColor = "#0E0E10";
const borderColor = chroma(backgroundColor).brighten(0.5).hex();
const textColor = "#ffffff";

export default {
  ...generate({
    name: "dark",
    primary: black.swatch[300],
    secondary: blue.swatch[500],
    text: gray.swatch[100],
  }),
  backgroundColor: [
    ...[...new Array(8)].map(() => backgroundColor),
    ...chroma
      .scale([backgroundColor, chroma(backgroundColor).brighten(1.5)])
      .colors(8)
      .slice(1),
  ],
  borderColor: [
    ...[...new Array(9)].map(() => borderColor),
    ...chroma
      .scale([borderColor, chroma(borderColor).brighten(2)])
      .colors(7)
      .slice(1),
  ],
  textColor: [
    ...chroma
      .scale([chroma(textColor).darken(0.5), chroma(textColor).darken(3.5)])
      .colors(8)
      .slice(1)
      .reverse(),
    textColor,
    ...chroma
      .scale([chroma(textColor).brighten(0.5), chroma(textColor).brighten(3.5)])
      .colors(8)
      .slice(1),
  ],
};
