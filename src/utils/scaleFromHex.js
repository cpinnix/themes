import brightScale from "./brightScale";
import darkScale from "./darkScale";

export default function scaleFromHex(hex) {
  return [...brightScale(hex), hex, ...darkScale(hex)];
}
