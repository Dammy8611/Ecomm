import { readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fontFolders = ["poppins", "roboto"];
const stylesheetPath = "./test.css";

const generateFontFaceRule = (fontName) => `
@font-face {
  font-family: '${fontName}';
  src: url('./assets/fonts/${fontName}.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}
`;

const isItalic = (fileName) => !/italic/i.test(fileName);

const generateStylesheet = () => {
  let stylesheetContent = "";

  fontFolders.forEach((folder) => {
    const fontFiles = readdirSync(
      join(__dirname, "./src/assets/fonts", folder)
    );

    fontFiles.filter(isItalic).forEach((file) => {
      const fontName = file.split(".")[0];
      stylesheetContent += generateFontFaceRule(fontName);
    });
  });

  writeFileSync(stylesheetPath, stylesheetContent);
  console.log("Stylesheet generated successfully!");
};

generateStylesheet();
