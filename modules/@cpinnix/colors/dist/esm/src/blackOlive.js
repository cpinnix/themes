import chroma from 'chroma-js';
import swatchFromScale from './swatchFromScale.js';

var scale = [chroma("#3d3e3d").brighten(3.5).hex(), chroma("#3d3e3d").brighten(3).hex(), chroma("#3d3e3d").brighten(2.5).hex(), chroma("#3d3e3d").brighten(2).hex(), chroma("#3d3e3d").brighten(1.5).hex(), chroma("#3d3e3d").brighten(1).hex(), chroma("#3d3e3d").brighten(0.5).hex(), "#3d3e3d", chroma("#3d3e3d").darken(0.25).hex(), chroma("#3d3e3d").darken(0.5).hex(), chroma("#3d3e3d").darken(0.75).hex(), chroma("#3d3e3d").darken(1).hex(), chroma("#3d3e3d").darken(1.25).hex(), chroma("#3d3e3d").darken(1.5).hex(), chroma("#3d3e3d").darken(1.75).hex()];
var blackOlive = {
  name: "blackOlive",
  hex: "#3d3e3d",
  swatch: swatchFromScale(scale),
  scale: scale
};

export { blackOlive as default };
//# sourceMappingURL=blackOlive.js.map
