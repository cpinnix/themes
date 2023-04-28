import chroma from 'chroma-js';
import { curry } from 'lodash-es';

var textColor = curry(function (t, s) {
  var theme = t;
  if (theme.textColor) {
    var scale = theme.textColor;
    var step = s || 0;
    var middle = Math.floor(scale.length / 2);
    var index = step + middle;
    return scale[index];
  } else {
    var _step2 = s || 0;
    var luminance = chroma(theme.primary.base).luminance();
    var _step = luminance > 0.5 ? _step2 : -_step2;
    var _middle = theme.text.baseIndex;
    var _index = _step + _middle;
    var color = theme.text[_index];
    return color;
  }
});
var backgroundColor = curry(function (t, s) {
  var theme = t;
  if (theme.backgroundColor) {
    var scale = theme.backgroundColor;
    var step = s || 0;
    var middle = Math.floor(scale.length / 2);
    var index = step + middle;
    return scale[index];
  } else {
    var _step3 = s || 0;
    var luminance = chroma(theme.primary.base).luminance();
    var _step = luminance > 0.5 ? _step3 : -_step3;
    var _middle2 = theme.primary.baseIndex;
    var _index2 = _step + _middle2;
    var color = theme.primary[_index2];
    return color;
  }
});
var borderColor = curry(function (t, s) {
  var theme = t;
  if (theme.borderColor) {
    var scale = theme.borderColor;
    var step = s || 0;
    var middle = Math.floor(scale.length / 2);
    var index = step + middle;
    return scale[index];
  } else {
    var _step4 = s || 0;
    var luminance = chroma(theme.primary.base).luminance();
    var _step = luminance > 0.5 ? _step4 : -_step4;
    var _middle3 = theme.primary.baseIndex;
    var _index3 = _step + _middle3;
    var color = theme.primary[_index3];
    return color;
  }
});
function all(theme) {
  return {
    textColor: textColor(theme),
    backgroundColor: backgroundColor(theme),
    borderColor: borderColor(theme)
  };
}
var palettes = {
  textColor: textColor,
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  all: all
};

export { all, backgroundColor, borderColor, palettes as default, textColor };
//# sourceMappingURL=palettes.js.map
