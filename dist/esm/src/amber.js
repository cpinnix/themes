import generateTheme from './utils/generateTheme.js';
import { amber as amber$1, blackOlive } from '@cpinnix/colors';

var amber = generateTheme({
  name: "amber",
  primary: amber$1.swatch[500],
  secondary: amber$1.swatch[500],
  text: blackOlive.swatch[1000]
});

export { amber as default };
//# sourceMappingURL=amber.js.map
