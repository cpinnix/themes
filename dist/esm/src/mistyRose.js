import generateTheme from './utils/generateTheme.js';
import mistyRose$1 from '@cpinnix/colors/mistyRose';
import contessa from '@cpinnix/colors/contessa';

var mistyRose = generateTheme({
  name: "mistyRose",
  primary: mistyRose$1.swatch[500],
  secondary: mistyRose$1.swatch[900],
  text: contessa.swatch[900]
});

export { mistyRose as default };
//# sourceMappingURL=mistyRose.js.map
