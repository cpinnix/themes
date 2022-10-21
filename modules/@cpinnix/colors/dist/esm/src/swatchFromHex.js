import scaleFromHex from './scaleFromHex.js';
import swatchFromScale from './swatchFromScale.js';

function swatchFromHex(hex) {
  var scale = scaleFromHex(hex);
  return swatchFromScale(scale);
}

export { swatchFromHex as default };
//# sourceMappingURL=swatchFromHex.js.map
