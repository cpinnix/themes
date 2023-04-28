import chroma from "chroma-js";
import { curry } from "lodash-es";

export const textColor = curry((t, s) => {
  const theme = t;

  if (theme.textColor) {
    const scale = theme.textColor;
    const step = s || 0;
    const middle = Math.floor(scale.length / 2);
    const index = step + middle;

    return scale[index];
  } else {
    const step = s || 0;

    const luminance = chroma(theme.primary.base).luminance();
    const _step = luminance > 0.5 ? step : -step;

    const middle = theme.text.baseIndex;
    const index = _step + middle;
    const color = theme.text[index];

    return color;
  }
});

export const backgroundColor = curry((t, s) => {
  const theme = t;

  if (theme.backgroundColor) {
    const scale = theme.backgroundColor;
    const step = s || 0;
    const middle = Math.floor(scale.length / 2);
    const index = step + middle;

    return scale[index];
  } else {
    const step = s || 0;
    const luminance = chroma(theme.primary.base).luminance();
    const _step = luminance > 0.5 ? step : -step;
    const middle = theme.primary.baseIndex;
    const index = _step + middle;
    const color = theme.primary[index];

    return color;
  }
});

export const borderColor = curry((t, s) => {
  const theme = t;

  if (theme.borderColor) {
    const scale = theme.borderColor;
    const step = s || 0;
    const middle = Math.floor(scale.length / 2);
    const index = step + middle;

    return scale[index];
  } else {
    const step = s || 0;

    const luminance = chroma(theme.primary.base).luminance();
    const _step = luminance > 0.5 ? step : -step;

    const middle = theme.primary.baseIndex;
    const index = _step + middle;
    const color = theme.primary[index];

    return color;
  }
});

export function all(theme) {
  return {
    textColor: textColor(theme),
    backgroundColor: backgroundColor(theme),
    borderColor: borderColor(theme),
  };
}

export default {
  textColor,
  backgroundColor,
  borderColor,
  all,
};
