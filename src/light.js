import { generateTheme as generate } from "./utils";
import { antiFlashWhite, blue, gray } from "@cpinnix/colors";
import chroma from "chroma-js";

const backgroundColor = antiFlashWhite.swatch[500];
const borderColor = antiFlashWhite.swatch[600];
const textColor = gray.swatch[1000];

export default {
  ...generate({
    name: "light",
    primary: antiFlashWhite.swatch[500],
    secondary: blue.swatch[500],
    text: gray.swatch[1000],
  }),
  backgroundColor: [
    ...chroma
      .scale([backgroundColor, chroma(backgroundColor).darken(3)])
      .mode("lch")
      .colors(8)
      .slice(1)
      .reverse(),
    backgroundColor,
    ...chroma
      .scale([backgroundColor, chroma(backgroundColor).brighten(3)])
      .colors(8)
      .slice(1),
  ],
  borderColor: [
    ...chroma
      .scale([chroma(borderColor).darken(1), chroma(borderColor).darken(4)])
      .colors(8)
      .slice(1)
      .reverse(),
    chroma(borderColor).darken(0.5).hex(),
    ...chroma
      .scale([borderColor, chroma(borderColor).darken(1)])
      .colors(8)
      .slice(1),
  ],
  textColor: [
    ...chroma
      .scale([chroma(textColor).brighten(0.5), chroma(textColor).brighten(3.5)])
      .colors(8)
      .slice(1)
      .reverse(),
    textColor,
    ...chroma
      .scale([chroma(textColor).darken(0.5), chroma(textColor).darken(3.5)])
      .colors(8)
      .slice(1),
  ],
};
