import generateTheme from './utils/generateTheme.js';
import burntUmber$1 from '@cpinnix/colors/burntUmber';
import blue from '@cpinnix/colors/blue';
import mistyRose from '@cpinnix/colors/mistyRose';

var burntUmber = generateTheme({
  name: "burntUmber",
  dark: true,
  primary: burntUmber$1.swatch[500],
  secondary: blue.swatch[500],
  text: mistyRose.swatch[500]
});

export { burntUmber as default };
//# sourceMappingURL=burntUmber.js.map
