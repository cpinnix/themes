import generateTheme from './utils/generateTheme.js';
import { copper as copper$1, raindropsOnRoses } from '@cpinnix/colors';

var copper = generateTheme({
  name: "copper",
  primary: copper$1.swatch[500],
  secondary: copper$1.swatch[500],
  text: raindropsOnRoses.swatch[50]
});

export { copper as default };
//# sourceMappingURL=copper.js.map
