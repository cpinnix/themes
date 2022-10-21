import generateTheme from './utils/generateTheme.js';
import sandDune$1 from '@cpinnix/colors/sandDune';
import antiFlashWhite from '@cpinnix/colors/antiFlashWhite';

var sandDune = generateTheme({
  name: "sandDune",
  primary: sandDune$1.swatch[500],
  secondary: sandDune$1.swatch[500],
  text: antiFlashWhite.swatch[200]
});

export { sandDune as default };
//# sourceMappingURL=sandDune.js.map
