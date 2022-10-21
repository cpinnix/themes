import { camelCase } from 'lodash-es';
import swatchFromHex from './swatchFromHex.js';
import scaleFromHex from './scaleFromHex.js';

function colorFromToken(name, hex) {
  return {
    name: camelCase(name),
    hex: hex,
    swatch: swatchFromHex(hex),
    scale: scaleFromHex(hex)
  };
}

export { colorFromToken as default };
//# sourceMappingURL=colorFromToken.js.map
