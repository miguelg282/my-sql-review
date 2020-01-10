// TODO
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    password: 'LOschargers@123',
    database: 'ball'

});

db.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('DB Connected!');
    }
});

module.exports = db;

