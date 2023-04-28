import { generateTheme as generate } from "./utils";
import { antiFlashWhite, blue, gray } from "@cpinnix/colors";
import chroma from "chroma-js";

const backgroundColor = "#F8F8FF";
const borderColor = chroma(backgroundColor).darken(0.5);
const textColor = "#000000";

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
      .scale([chroma(textColor).brighten(2), chroma(textColor).brighten(8)])
      .colors(8)
      .slice(1)
      .reverse(),
    textColor,
    ...chroma
      .scale([chroma(textColor).darken(0.5), chroma(textColor).darken(6)])
      .colors(8)
      .slice(1),
  ],
};
