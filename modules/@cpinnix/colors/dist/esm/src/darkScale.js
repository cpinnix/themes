import chroma from 'chroma-js';

function darkScale(color) {
  return chroma.scale([color, chroma(color).darken(3)]).mode("lch").colors(8).slice(1);
}

export { darkScale as default };
//# sourceMappingURL=darkScale.js.map
