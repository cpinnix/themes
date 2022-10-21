import generateTheme from './utils/generateTheme.js';
import tumbleweed$1 from '@cpinnix/colors/tumbleweed';
import raindropsOnRoses from '@cpinnix/colors/raindropsOnRoses';

var tumbleweed = generateTheme({
  name: "tumbleweed",
  primary: tumbleweed$1.swatch[700],
  secondary: tumbleweed$1.swatch[500],
  text: raindropsOnRoses.swatch[50]
});

export { tumbleweed as default };
//# sourceMappingURL=tumbleweed.js.map
