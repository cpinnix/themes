import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: ["./src/index.js"],
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      babelHelpers: "runtime",
      exclude: /node_modules/,
      extensions: [".js", ".ts", ".tsx"],
    }),
  ],
  external: ["lodash", "lodash-es", "chroma-js", "@cpinnix/colors"],
};
