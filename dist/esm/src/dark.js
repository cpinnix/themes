import generateTheme from './utils/generateTheme.js';
import black from '@cpinnix/colors/black';
import gray from '@cpinnix/colors/gray';
import blue from '@cpinnix/colors/blue';

var dark = generateTheme({
  name: "dark",
  primary: black.swatch[300],
  secondary: blue.swatch[500],
  text: gray.swatch[100]
});

export { dark as default };
//# sourceMappingURL=dark.js.map
