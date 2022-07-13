import {
  CompleteMultipartUploadCommandOutput,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
// // Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: process.env.AWS_S3_REGION_NAME });

export const getFileExtension = (filename: string) => {
  return filename.split(".").pop();
};

export const saveBase64StringToAWS = (
  base64String: string,
  keyName: string
) => {
  return new Promise<{ url: string | undefined }>(async (resolve, reject) => {
    try {
      const base64 = base64String.replace(/^data:image\/\w+;base64,/, ""); //https://medium.com/yavar/amazon-s3-bucket-image-upload-using-node-js-f1fe58183a88
      const buff = Buffer.from(base64, "base64");

      // https://stackoverflow.com/a/49354498
      const format = base64String.substring(
        base64String.indexOf("data:") + 5,
        base64String.indexOf(";base64")
      );

      const uploadParams = {
        Bucket: process.env.AWS_STORAGE_BUCKET_NAME,
        Key: keyName,
        Body: buff,
        ContentEncoding: "base64",
        ContentType: format,
      };

      const awsUpload = new Upload({ client: s3Client, params: uploadParams });
      const result: CompleteMultipartUploadCommandOutput =
        await awsUpload.done();

      resolve({ url: result.Location });
    } catch (err) {
      console.log("Error", err);
      reject(err);
    }
  });
};

export const saveStreamToAWS = (
  readStream: Buffer,
  keyName: string,
  contentType: string
) => {
  return new Promise<{ url: string | undefined }>(async (resolve, reject) => {
    try {
      const uploadParams = {
        Bucket: process.env.AWS_STORAGE_BUCKET_NAME,
        Key: keyName,
        Body: readStream,
        ContentType: contentType,
      };

      const data = await s3Client.send(new PutObjectCommand(uploadParams));

      resolve({ url: `${process.env.AWS_OBJECT_URL}${keyName}` }); // For unit tests.
    } catch (err) {
      console.log("Error", err);
      reject(err);
    }
  });
};
