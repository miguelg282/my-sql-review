/* TODO */
DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;

USE ball;

CREATE TABLE tennis (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    item_name TEXT NOT NULL,
    amount INTEGER NOT NULL
);

