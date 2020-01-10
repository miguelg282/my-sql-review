// TODO

const db = require('./index.js');

module.exports={
    readAll: (callback) => {
        db.query('SELECT * FROM tennis;', (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        });
    },
    // obj={name: 'name', amount: 123}; same as below (object destructuring)
    addItem: ({name, amount}, callback) => {
        db.query(`INSERT INTO tennis (item_name, amount) VALUES ('${name}', ${amount});`, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }
};

