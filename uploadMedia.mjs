import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import mime from "mime-types";

const s3Client = new S3Client({
  region: "auto",
  endpoint: "https://27834a8008abae2529d69a14eb94af3b.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "427be74172835549cc441fde34cfb82c",
    secretAccessKey: "2f9e3a7f2462505aaa5e1263765c8ed1162797370391544f47f65b158948a700",
  },
});

const BUCKET = "kishori-media";
const DIRS = ["public/images", "public/media", "public/videos"];

async function uploadFile(filePath, key) {
  const fileStream = fs.createReadStream(filePath);
  const contentType = mime.lookup(filePath) || "application/octet-stream";
  
  await s3Client.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: fileStream,
    ContentType: contentType,
  }));
  console.log(`Uploaded ${key}`);
}

async function walkAndUpload(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await walkAndUpload(fullPath);
    } else {
      // The key should be "images/logo.png", stripping "public/"
      const key = fullPath.replace(/^public\//, "");
      await uploadFile(fullPath, key);
    }
  }
}

async function main() {
  for (const dir of DIRS) {
    console.log(`Uploading directory: ${dir}`);
    await walkAndUpload(dir);
  }
  console.log("All uploads complete.");
}
main();
