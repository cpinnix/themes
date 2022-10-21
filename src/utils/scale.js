import brightScale from "./brightScale";
import darkScale from "./darkScale";

export default function scale(color) {
  const s = [...brightScale(color), color, ...darkScale(color)];
  s.base = color;
  s.baseIndex = 7;
  return s;
}
