import generateTheme from './utils/generateTheme.js';
import { blackCoffee as blackCoffee$1, raindropsOnRoses } from '@cpinnix/colors';

var blackCoffee = generateTheme({
  name: "blackCoffee",
  primary: blackCoffee$1.swatch[500],
  secondary: blackCoffee$1.swatch[500],
  text: raindropsOnRoses.swatch[50]
});

export { blackCoffee as default };
//# sourceMappingURL=blackCoffee.js.map
