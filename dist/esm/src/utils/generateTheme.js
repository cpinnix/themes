import scale from './scale.js';

function generateTheme(config) {
  return {
    name: config.name,
    primary: scale(config.primary),
    secondary: scale(config.secondary),
    text: scale(config.text)
  };
}

export { generateTheme as default };
//# sourceMappingURL=generateTheme.js.map
