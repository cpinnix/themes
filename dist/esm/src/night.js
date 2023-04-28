import _toConsumableArray from '../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js';
import _defineProperty from '../node_modules/@babel/runtime/helpers/esm/defineProperty.js';
import generateTheme from './utils/generateTheme.js';
import { black, blue, gray } from '@cpinnix/colors';
import chroma from 'chroma-js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var backgroundColor = "#0E0E10";
var borderColor = chroma(backgroundColor).brighten(0.5).hex();
var textColor = "#ffffff";
var night = _objectSpread(_objectSpread({}, generateTheme({
  name: "dark",
  primary: black.swatch[300],
  secondary: blue.swatch[500],
  text: gray.swatch[100]
})), {}, {
  backgroundColor: [].concat(_toConsumableArray(_toConsumableArray(new Array(8)).map(function () {
    return backgroundColor;
  })), _toConsumableArray(chroma.scale([backgroundColor, chroma(backgroundColor).brighten(1.5)]).colors(8).slice(1))),
  borderColor: [].concat(_toConsumableArray(_toConsumableArray(new Array(9)).map(function () {
    return borderColor;
  })), _toConsumableArray(chroma.scale([borderColor, chroma(borderColor).brighten(2)]).colors(7).slice(1))),
  textColor: [].concat(_toConsumableArray(chroma.scale([chroma(textColor).darken(0.5), chroma(textColor).darken(3.5)]).colors(8).slice(1).reverse()), [textColor], _toConsumableArray(chroma.scale([chroma(textColor).brighten(0.5), chroma(textColor).brighten(3.5)]).colors(8).slice(1)))
});

export { night as default };
//# sourceMappingURL=night.js.map
