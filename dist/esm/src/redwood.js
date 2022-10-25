import generateTheme from './utils/generateTheme.js';
import { redwood as redwood$1, mistyRose } from '@cpinnix/colors';

var redwood = generateTheme({
  name: "redwood",
  dark: true,
  primary: redwood$1.swatch[500],
  secondary: redwood$1.swatch[500],
  text: mistyRose.swatch[300]
});

export { redwood as default };
//# sourceMappingURL=redwood.js.map
