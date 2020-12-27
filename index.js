const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const csurf = require("csurf");
const { sendEmail } = require("./ses.js");
const email = `booking@lisart.earth`;
const db = require("./db");
const s3 = require("./s3");
const path = require("path");
const multer = require("multer");
const uidSafe = require("uid-safe");

let secret;

if (process.env.DATABASE_URL) {
    secret = process.env;
} else {
    secret = require("./secrets.json");
}

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
});

app.use(
    cookieSession({
        secret: secret.secret,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(express.json());

app.use(compression());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("public"));

app.get("/house", function (req, res) {
    db.getProjects()
        .then((data) => {
            res.json(data.rows);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/project/:id.json", function (req, res) {
    db.getProject(req.params.id)
        .then((data) => {
            res.json(data.rows[0]);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post("/contact", function (req, res) {
    console.log(req.body);
    sendEmail(
        email,
        req.body.content,
        `From: ${req.body.name}  ${req.body.email} Title: ${req.body.title}`
    )
        .then(() => {
            res.json({ success: true });
        })
        .catch((err) => {
            console.log(err);
            res.json({ success: false });
        });
});

app.post("/verify", function (req, res) {
    if (req.body.password === secret.adm) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post("/upload", uploader.any(), s3.upload, (req, res) => {
    console.log("req. body", req.body);
    console.log("files: ", req.files);
    let preview = `https://s3.amazonaws.com/lisart/${req.files[0].filename}`;
    let imageOne;
    let imageTwo;
    let imageThree;
    let imageFour;
    let imageFive;
    let imageSix;
    let imageSeven;
    let imageEight;
    let imageNine;
    let name = req.body.name;
    let description = req.body.description || null;
    let longDescription = req.body.longDescription || null;

    for (var i = 1; i < req.files.length; i++) {
        if (req.files[1]) {
            imageOne = `https://s3.amazonaws.com/lisart/${req.files[1].filename}`;
        } else {
            imageOne = null;
        }
        if (req.files[2]) {
            imageTwo = `https://s3.amazonaws.com/lisart/${req.files[2].filename}`;
        } else {
            imageTwo = null;
        }
        if (req.files[3]) {
            imageThree = `https://s3.amazonaws.com/lisart/${req.files[3].filename}`;
        } else {
            imageThree = null;
        }
        if (req.files[4]) {
            imageFour = `https://s3.amazonaws.com/lisart/${req.files[4].filename}`;
        } else {
            imageFour = null;
        }
        if (req.files[5]) {
            imageFive = `https://s3.amazonaws.com/lisart/${req.files[5].filename}`;
        } else {
            imageFive = null;
        }
        if (req.files[6]) {
            imageSix = `https://s3.amazonaws.com/lisart/${req.files[6].filename}`;
        } else {
            imageSix = null;
        }
        if (req.files[7]) {
            imageSeven = `https://s3.amazonaws.com/lisart/${req.files[7].filename}`;
        } else {
            imageSeven = null;
        }
        if (req.files[8]) {
            imageEight = `https://s3.amazonaws.com/lisart/${req.files[8].filename}`;
        } else {
            imageEight = null;
        }
        if (req.files[9]) {
            imageNine = `https://s3.amazonaws.com/lisart/${req.files[9].filename}`;
        } else {
            imageNine = null;
        }
    }

    if (req.body) {
        if (req.files) {
            db.insertProject(
                name,
                description,
                longDescription,
                preview,
                imageOne,
                imageTwo,
                imageThree,
                imageFour,
                imageFive,
                imageSix,
                imageSeven,
                imageEight,
                imageNine
            )
                .then((data) => {
                    console.log("project uploaded in db", data);
                    res.json({ success: true });
                })
                .catch((err) => {
                    console.log(
                        "an error occurred while uploading project in db",
                        err
                    );
                    res.json({ success: false });
                });
        } else {
            console.log("at least a preview image of the project is required");
            res.json({ success: false });
        }
    } else {
        console.log("the name of the project is required");
        res.json({ success: false });
    }
});

app.post("/delete", function (req, res) {
    console.log("name of the project to delete", req.body.name);
    db.deleteProject(req.body.name)
        .then((data) => {
            if (data.rowCount === 0) {
                res.json({ success: false });
            }
            console.log("qualcosa per discernere? ", data);
            res.json({ success: true });
        })
        .catch((err) => {
            console.log(err);
            res.json({ success: false });
        });
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, function () {
    console.log("Lisart server listening.");
});
