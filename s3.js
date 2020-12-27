const aws = require("aws-sdk");
const fs = require("fs");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
});

exports.upload = (req, res, next) => {
    if (!req.files) {
        console.log("anfame");
        return res.sendStatus(500);
    }

    for (var i = 0; i < req.files.length; i++) {
        const { filename, mimetype, size, path } = req.files[i];

        const promise = s3
            .putObject({
                Bucket: "lisart",
                ACL: "public-read",
                Key: filename,
                Body: fs.createReadStream(path),
                ContentType: mimetype,
                ContentLength: size,
            })
            .promise();
        promise
            .then(() => {
                console.log("amazon upload is complete!");
                next();
                fs.unlink(path, () => {});
                // it worked!!!
            })
            .catch((err) => {
                // uh oh
                console.log(err);
            });
    }
};
