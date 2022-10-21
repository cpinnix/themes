import chroma from "chroma-js";

export default function brightScale(color) {
  return chroma
    .scale([color, chroma(color).brighten(3)])
    .colors(8)
    .slice(1)
    .reverse();
}
