import fs from "fs";
import themeNames from "./src/themeNames.js";
import { camelCase, snakeCase, startCase } from "lodash-es";

function template(themeName) {
  return `import React from "react";
import Display from "./Display";
import { ${camelCase(themeName)} as theme } from "../src/index";

export default {
  title: "${startCase(themeName)}",
};

export const ${snakeCase(themeName)} = () => <Display {...{ theme }} />
  `;
}

function main() {
  const templates = themeNames.map((themeName) => template(themeName));

  templates.forEach((str, index) => {
    fs.writeFileSync(`./stories/${themeNames[index]}.stories.js`, str);
  });
}

main();
