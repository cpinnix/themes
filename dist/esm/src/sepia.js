import generateTheme from './utils/generateTheme.js';
import { sepia as sepia$1, brownYellow } from '@cpinnix/colors';

var sepia = generateTheme({
  name: "sepia",
  primary: sepia$1.swatch[500],
  secondary: sepia$1.swatch[500],
  text: brownYellow.swatch[200]
});

export { sepia as default };
//# sourceMappingURL=sepia.js.map
