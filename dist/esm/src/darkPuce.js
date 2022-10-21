import generateTheme from './utils/generateTheme.js';
import darkPuce$1 from '@cpinnix/colors/darkPuce';
import shilo from '@cpinnix/colors/shilo';

var darkPuce = generateTheme({
  name: "darkPuce",
  dark: true,
  primary: darkPuce$1.swatch[500],
  secondary: darkPuce$1.swatch[500],
  text: shilo.swatch[300]
});

export { darkPuce as default };
//# sourceMappingURL=darkPuce.js.map
