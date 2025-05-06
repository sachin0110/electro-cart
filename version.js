const { version } = require("./package.json");
const fs = require("fs");

const content = `export const appVersion = '${version}';\n`;
fs.writeFileSync("./src/environments/version.ts", content);
console.log(`✔ App version ${version} written to version.ts`);
