// import db
const db = require('./index.js');
const data = [
    {
        name: 'Mikey',
        amount: 999
    },
    {
        name: 'Jonhy',
        amount: 10
    },
    {
        name: 'Sally',
        amount: 20
    },
    {
        name: 'Sue',
        amount: 30
    },
    {
        name: 'Bill',
        amount: 50
    }
];

data.forEach(({name, amount}) => { 
    db.query(`INSERT INTO tennis (item_name, amount) VALUES ('${name}', ${amount});`);
});
