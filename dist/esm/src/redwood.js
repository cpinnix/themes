import generateTheme from './utils/generateTheme.js';
import redwood$1 from '@cpinnix/colors/redwood';
import mistyRose from '@cpinnix/colors/mistyRose';

var redwood = generateTheme({
  name: "redwood",
  dark: true,
  primary: redwood$1.swatch[500],
  secondary: redwood$1.swatch[500],
  text: mistyRose.swatch[300]
});

export { redwood as default };
//# sourceMappingURL=redwood.js.map
