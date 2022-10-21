import { zipObject } from "lodash-es";

export default function swatchFromScale(scale) {
  const tokenKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const tokens = zipObject(tokenKeys, scale.slice(2, -2));
  return tokens;
}
