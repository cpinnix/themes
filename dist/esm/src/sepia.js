import generateTheme from './utils/generateTheme.js';
import sepia$1 from '@cpinnix/colors/sepia';
import brownYellow from '@cpinnix/colors/brownYellow';

var sepia = generateTheme({
  name: "sepia",
  primary: sepia$1.swatch[500],
  secondary: sepia$1.swatch[500],
  text: brownYellow.swatch[200]
});

export { sepia as default };
//# sourceMappingURL=sepia.js.map
