import _toConsumableArray from '../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js';
import brightScale from './brightScale.js';
import darkScale from './darkScale.js';

function scale(color) {
  var s = [].concat(_toConsumableArray(brightScale(color)), [color], _toConsumableArray(darkScale(color)));
  s.base = color;
  s.baseIndex = 7;
  return s;
}

export { scale as default };
//# sourceMappingURL=scale.js.map
