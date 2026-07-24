import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceWebpInFiles() {
  const srcDir = path.join(process.cwd(), 'src');
  let updatedFiles = 0;

  walkDir(srcDir, (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Regex to match our specific R2 bucket URLs and replace the extension with .webp
    // Example: https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay.JPG
    const regex = /(https:\/\/pub-d85a0963552a45eaa4638691f287aaaa\.r2\.dev\/.*?)\.(JPG|jpg|jpeg|PNG|png)/g;
    
    if (regex.test(content)) {
      const newContent = content.replace(regex, '$1.webp');
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Updated: ${filePath}`);
      updatedFiles++;
    }
  });

  console.log(`Finished updating ${updatedFiles} files to use .webp URLs.`);
}

replaceWebpInFiles();
