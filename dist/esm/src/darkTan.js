import generateTheme from './utils/generateTheme.js';
import { darkTan as darkTan$1, apricot } from '@cpinnix/colors';

var darkTan = generateTheme({
  name: "darkTan",
  primary: darkTan$1.swatch[500],
  secondary: darkTan$1.swatch[500],
  text: apricot.swatch[200]
});

export { darkTan as default };
//# sourceMappingURL=darkTan.js.map
