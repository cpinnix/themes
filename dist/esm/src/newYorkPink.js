import generateTheme from './utils/generateTheme.js';
import { newYorkPink as newYorkPink$1, antiFlashWhite } from '@cpinnix/colors';

var newYorkPink = generateTheme({
  name: "newYorkPink",
  primary: newYorkPink$1.swatch[500],
  secondary: newYorkPink$1.swatch[500],
  text: antiFlashWhite.swatch[100]
});

export { newYorkPink as default };
//# sourceMappingURL=newYorkPink.js.map
