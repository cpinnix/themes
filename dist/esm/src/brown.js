import generateTheme from './utils/generateTheme.js';
import { brown as brown$1, raindropsOnRoses } from '@cpinnix/colors';

var brown = generateTheme({
  name: "brown",
  primary: brown$1.swatch[500],
  secondary: brown$1.swatch[500],
  text: raindropsOnRoses.swatch[50]
});

export { brown as default };
//# sourceMappingURL=brown.js.map
