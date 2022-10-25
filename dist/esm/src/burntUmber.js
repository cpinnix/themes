import generateTheme from './utils/generateTheme.js';
import { burntUmber as burntUmber$1, blue, mistyRose } from '@cpinnix/colors';

var burntUmber = generateTheme({
  name: "burntUmber",
  dark: true,
  primary: burntUmber$1.swatch[500],
  secondary: blue.swatch[500],
  text: mistyRose.swatch[500]
});

export { burntUmber as default };
//# sourceMappingURL=burntUmber.js.map
