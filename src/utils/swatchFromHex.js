import scaleFromHex from "./scaleFromHex";
import swatchFromScale from "./swatchFromScale";

export default function swatchFromHex(hex) {
  const scale = scaleFromHex(hex);
  return swatchFromScale(scale);
}
