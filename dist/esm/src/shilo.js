import generateTheme from './utils/generateTheme.js';
import { shilo as shilo$1, tuscanRed } from '@cpinnix/colors';

var shilo = generateTheme({
  name: "shilo",
  primary: shilo$1.swatch[500],
  secondary: shilo$1.swatch[500],
  text: tuscanRed.swatch[1000]
});

export { shilo as default };
//# sourceMappingURL=shilo.js.map
