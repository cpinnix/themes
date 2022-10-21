import chroma from 'chroma-js';

function brightScale(color) {
  return chroma.scale([color, chroma(color).brighten(3)]).colors(8).slice(1).reverse();
}

export { brightScale as default };
//# sourceMappingURL=brightScale.js.map
