const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABSE_URL ||
        "postgres:postgres:postgres@localhost:5432/lisart"
);

module.exports.insertProject = (
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
) => {
    return db.query(
        `
    INSERT INTO progetti (name, description, longDescription, preview, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    `,
        [
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
            imageNine,
        ]
    );
};

module.exports.deleteProject = (name) => {
    return db.query(
        `
    DELETE FROM progetti
    WHERE name = $1
    `,
        [name]
    );
};

module.exports.getProjects = () => {
    return db.query(`
    SELECT * FROM progetti
    `);
};

module.exports.getProject = (id) => {
    return db.query(
        `
    SELECT * FROM progetti
    WHERE id = $1
    `,
        [id]
    );
};
