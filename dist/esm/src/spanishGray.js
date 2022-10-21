import generateTheme from './utils/generateTheme.js';
import spanishGray$1 from '@cpinnix/colors/spanishGray';
import antiFlashWhite from '@cpinnix/colors/antiFlashWhite';

var spanishGray = generateTheme({
  name: "spanishGray",
  primary: spanishGray$1.swatch[500],
  secondary: spanishGray$1.swatch[500],
  text: antiFlashWhite.swatch[500]
});

export { spanishGray as default };
//# sourceMappingURL=spanishGray.js.map
