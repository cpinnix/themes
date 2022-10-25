import generateTheme from './utils/generateTheme.js';
import { antiFlashWhite, blue, gray } from '@cpinnix/colors';

var light = generateTheme({
  name: "light",
  primary: antiFlashWhite.swatch[500],
  secondary: blue.swatch[500],
  text: gray.swatch[1000]
});

export { light as default };
//# sourceMappingURL=light.js.map
