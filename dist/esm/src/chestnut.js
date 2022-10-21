import generateTheme from './utils/generateTheme.js';
import chestnut$1 from '@cpinnix/colors/chestnut';
import mistyRose from '@cpinnix/colors/mistyRose';

var chestnut = generateTheme({
  name: "chestnut",
  dark: true,
  primary: chestnut$1.swatch[500],
  secondary: chestnut$1.swatch[500],
  text: mistyRose.swatch[500]
});

export { chestnut as default };
//# sourceMappingURL=chestnut.js.map
