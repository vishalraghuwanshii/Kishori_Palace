import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: "https://27834a8008abae2529d69a14eb94af3b.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "427be74172835549cc441fde34cfb82c",
    secretAccessKey: "2f9e3a7f2462505aaa5e1263765c8ed1162797370391544f47f65b158948a700",
  },
});

async function main() {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Buckets:", JSON.stringify(data.Buckets.map(b => b.Name)));
  } catch (err) {
    console.error("Error", err);
  }
}
main();
