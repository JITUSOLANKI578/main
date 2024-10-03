const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'greentiranga',
    password: 'greentiranga',
    database: 'greentiranga',
});

export default connection;