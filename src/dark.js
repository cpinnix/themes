import { generateTheme as generate } from "./utils";
import { black, gray, blue } from "@cpinnix/colors";
import chroma from "chroma-js";

const backgroundColor = black.swatch[300];
const borderColor = black.swatch[400];
const textColor = gray.swatch[100];

export default {
  ...generate({
    name: "dark",
    primary: black.swatch[300],
    secondary: blue.swatch[500],
    text: gray.swatch[100],
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
      .scale([chroma(borderColor).darken(0.5), chroma(borderColor).darken(3.5)])
      .colors(8)
      .slice(1)
      .reverse(),
    borderColor,
    ...chroma
      .scale([
        chroma(borderColor).brighten(0.5),
        chroma(borderColor).brighten(3.5),
      ])
      .colors(8)
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
