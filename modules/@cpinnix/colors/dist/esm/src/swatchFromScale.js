import { zipObject } from 'lodash-es';

function swatchFromScale(scale) {
  var tokenKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  var tokens = zipObject(tokenKeys, scale.slice(2, -2));
  return tokens;
}

export { swatchFromScale as default };
//# sourceMappingURL=swatchFromScale.js.map
