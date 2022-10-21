import chroma from "chroma-js";

export default function darkScale(color) {
  return chroma
    .scale([color, chroma(color).darken(3)])
    .mode("lch")
    .colors(8)
    .slice(1);
}
