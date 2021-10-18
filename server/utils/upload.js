const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.BUCKET_REGION });
const s3 = new AWS.S3({ params: { Bucket: process.env.BUCKET_NAME } });

function upload(params) {
  s3.upload(params, (err, data) => {
    if (err) {
      console.log('Error', err);
    }
    if (data) {
      console.log('Upload Success', data.Location);
    }
  });
}

module.exports = upload;
