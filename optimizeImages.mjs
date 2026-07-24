import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand, ListBucketsCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { Readable } from "stream";

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://27834a8008abae2529d69a14eb94af3b.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "427be74172835549cc441fde34cfb82c",
    secretAccessKey: "2f9e3a7f2462505aaa5e1263765c8ed1162797370391544f47f65b158948a700",
  },
});

async function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

async function optimizeImages() {
  console.log("Fetching buckets...");
  const { Buckets } = await s3.send(new ListBucketsCommand({}));
  if (!Buckets || Buckets.length === 0) {
    console.error("No buckets found in this account.");
    return;
  }
  
  const bucketName = Buckets[0].Name;
  console.log(`Found bucket: ${bucketName}`);

  console.log("Fetching list of objects from R2...");
  const listCmd = new ListObjectsV2Command({ Bucket: bucketName });
  const { Contents } = await s3.send(listCmd);
  
  if (!Contents) {
    console.log("Bucket is empty.");
    return;
  }

  const imageFiles = Contents.filter(item => 
    item.Key.match(/\.(jpg|jpeg|png)$/i)
  );

  console.log(`Found ${imageFiles.length} images to optimize.`);

  for (const file of imageFiles) {
    const originalKey = file.Key;
    const newKey = originalKey.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    
    // Check if webp version already exists to avoid redundant processing
    const existingWebp = Contents.find(item => item.Key === newKey);
    if (existingWebp) {
      console.log(`Skipping ${originalKey} - ${newKey} already exists.`);
      continue;
    }

    try {
      console.log(`Downloading ${originalKey} (${(file.Size / 1024 / 1024).toFixed(2)} MB)...`);
      const getCmd = new GetObjectCommand({ Bucket: bucketName, Key: originalKey });
      const { Body } = await s3.send(getCmd);
      const originalBuffer = await streamToBuffer(Body);

      console.log(`Compressing ${originalKey} to WebP...`);
      const webpBuffer = await sharp(originalBuffer)
        .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920px for hero images
        .webp({ quality: 80 })
        .toBuffer();

      console.log(`Uploading ${newKey} (${(webpBuffer.length / 1024 / 1024).toFixed(2)} MB)...`);
      const putCmd = new PutObjectCommand({
        Bucket: bucketName,
        Key: newKey,
        Body: webpBuffer,
        ContentType: "image/webp",
      });
      await s3.send(putCmd);
      
      console.log(`✅ Successfully optimized and uploaded: ${newKey}`);
    } catch (err) {
      console.error(`❌ Failed to process ${originalKey}:`, err.message);
    }
  }

  console.log("All image optimizations complete!");
}

optimizeImages();
