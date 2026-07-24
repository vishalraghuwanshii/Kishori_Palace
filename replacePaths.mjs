import fs from "fs";
import path from "path";

const R2_URL = "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev";
const DIRECTORY = "src";

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      let originalContent = content;
      
      content = content.replace(/"\/images\//g, `"${R2_URL}/images/`);
      content = content.replace(/"\/media\//g, `"${R2_URL}/media/`);
      content = content.replace(/"\/videos\//g, `"${R2_URL}/videos/`);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, "utf-8");
        console.log(`Updated paths in ${fullPath}`);
      }
    }
  }
}

processDirectory(DIRECTORY);
console.log("Path replacement complete.");
