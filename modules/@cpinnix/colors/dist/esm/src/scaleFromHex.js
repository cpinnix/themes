import _toConsumableArray from '../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js';
import brightScale from './brightScale.js';
import darkScale from './darkScale.js';

function scaleFromHex(hex) {
  return [].concat(_toConsumableArray(brightScale(hex)), [hex], _toConsumableArray(darkScale(hex)));
}

export { scaleFromHex as default };
//# sourceMappingURL=scaleFromHex.js.map
