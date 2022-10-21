import scale from "./scale";

export default function generateTheme(config) {
  return {
    name: config.name,
    primary: scale(config.primary),
    secondary: scale(config.secondary),
    text: scale(config.text),
  };
}
