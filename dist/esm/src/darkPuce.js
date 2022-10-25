import generateTheme from './utils/generateTheme.js';
import { darkPuce as darkPuce$1, shilo } from '@cpinnix/colors';

var darkPuce = generateTheme({
  name: "darkPuce",
  dark: true,
  primary: darkPuce$1.swatch[500],
  secondary: darkPuce$1.swatch[500],
  text: shilo.swatch[300]
});

export { darkPuce as default };
//# sourceMappingURL=darkPuce.js.map
