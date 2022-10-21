import chroma from 'chroma-js';
import * as colorMap from './colorMap.js';

var colors = Object.values(colorMap).sort(function (a, b) {
  return chroma(a.swatch[500]).get("hsl.h") - chroma(b.swatch[500]).get("hsl.h") || chroma(b.swatch[500]).luminance() - chroma(a.swatch[500]).luminance();
});

export { colors as default };
//# sourceMappingURL=colors.js.map
