import generateTheme from './utils/generateTheme.js';
import darkTan$1 from '@cpinnix/colors/darkTan';
import apricot from '@cpinnix/colors/apricot';

var darkTan = generateTheme({
  name: "darkTan",
  primary: darkTan$1.swatch[500],
  secondary: darkTan$1.swatch[500],
  text: apricot.swatch[200]
});

export { darkTan as default };
//# sourceMappingURL=darkTan.js.map
