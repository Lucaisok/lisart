--DROP TABLE IF EXISTS progetti;

CREATE TABLE progetti(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    longDescription TEXT,
    preview TEXT NOT NULL,
    imageOne TEXT,
    imageTwo TEXT,
    imageThree TEXT,
    imageFour TEXT,
    imageFive TEXT,
    imageSix TEXT,
    imageSeven TEXT,
    imageEight TEXT,
    imageNine TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);