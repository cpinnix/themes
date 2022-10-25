import generateTheme from './utils/generateTheme.js';
import { spanishGray as spanishGray$1, antiFlashWhite } from '@cpinnix/colors';

var spanishGray = generateTheme({
  name: "spanishGray",
  primary: spanishGray$1.swatch[500],
  secondary: spanishGray$1.swatch[500],
  text: antiFlashWhite.swatch[500]
});

export { spanishGray as default };
//# sourceMappingURL=spanishGray.js.map
