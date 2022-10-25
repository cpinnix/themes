import generateTheme from './utils/generateTheme.js';
import { beige as beige$1, blackCoffee } from '@cpinnix/colors';

var beige = generateTheme({
  name: "beige",
  primary: beige$1.swatch[500],
  secondary: beige$1.swatch[900],
  text: blackCoffee.swatch[500]
});

export { beige as default };
//# sourceMappingURL=beige.js.map
