import { camelCase } from "lodash-es";
import swatchFromHex from "./swatchFromHex";
import scaleFromHex from "./scaleFromHex";

export default function colorFromToken(name, hex) {
  return {
    name: camelCase(name),
    hex,
    swatch: swatchFromHex(hex),
    scale: scaleFromHex(hex),
  };
}
