import generateTheme from './utils/generateTheme.js';
import { tuscanRed as tuscanRed$1, shilo } from '@cpinnix/colors';

var tuscanRed = generateTheme({
  name: "tuscanRed",
  dark: true,
  primary: tuscanRed$1.swatch[500],
  secondary: tuscanRed$1.swatch[500],
  text: shilo.swatch[100]
});

export { tuscanRed as default };
//# sourceMappingURL=tuscanRed.js.map
