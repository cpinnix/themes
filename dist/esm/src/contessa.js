import generateTheme from './utils/generateTheme.js';
import contessa$1 from '@cpinnix/colors/contessa';
import mistyRose from '@cpinnix/colors/mistyRose';

var contessa = generateTheme({
  name: "contessa",
  primary: contessa$1.swatch[500],
  secondary: contessa$1.swatch[500],
  text: mistyRose.swatch[300]
});

export { contessa as default };
//# sourceMappingURL=contessa.js.map
