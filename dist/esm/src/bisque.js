import generateTheme from './utils/generateTheme.js';
import { bisque as bisque$1, blackCoffee } from '@cpinnix/colors';

var bisque = generateTheme({
  name: "bisque",
  primary: bisque$1.swatch[500],
  secondary: bisque$1.swatch[500],
  text: blackCoffee.swatch[400]
});

export { bisque as default };
//# sourceMappingURL=bisque.js.map
