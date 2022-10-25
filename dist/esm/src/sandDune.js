import generateTheme from './utils/generateTheme.js';
import { sandDune as sandDune$1, antiFlashWhite } from '@cpinnix/colors';

var sandDune = generateTheme({
  name: "sandDune",
  primary: sandDune$1.swatch[500],
  secondary: sandDune$1.swatch[500],
  text: antiFlashWhite.swatch[200]
});

export { sandDune as default };
//# sourceMappingURL=sandDune.js.map
