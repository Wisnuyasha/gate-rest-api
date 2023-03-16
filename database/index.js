const mssql = require('mssql')

const pool = mssql.createPool({
    host: '10.199.14.47',
    user: 'integratif',
    password: 'G3rb4ng!',
    database: 'GATE_DEV',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()