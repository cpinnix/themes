import generateTheme from './utils/generateTheme.js';
import { chestnut as chestnut$1, mistyRose } from '@cpinnix/colors';

var chestnut = generateTheme({
  name: "chestnut",
  dark: true,
  primary: chestnut$1.swatch[500],
  secondary: chestnut$1.swatch[500],
  text: mistyRose.swatch[500]
});

export { chestnut as default };
//# sourceMappingURL=chestnut.js.map
