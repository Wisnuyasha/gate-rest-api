// const mssql = require('mssql')

// const pool = mssql.connect({
//     host: '10.199.14.47',
//     user: 'integratif',
//     password: 'G3rb4ng!',
//     database: 'GATE_DEV',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// pool.getConnection((err, conn) => {
//     if(err) console.log(err)
//     console.log("Connected successfully")
// })

// module.exports = pool.promise()

const mssql = require('mssql')

// Konfigurasi koneksi ke SQL Server
const config = {
    user: 'integratif',
    password: 'G3rb4ng!',
    server: '10.199.14.47',
    database: 'GATE_DEV',
    options: {
        encrypt: true, // Jika menggunakan koneksi SSL
        trustServerCertificate: true // Jika sertifikat SSL tidak valid
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000 // Waktu tunggu maksimum sebelum koneksi ditutup
    }
};

// Buat koneksi ke SQL Server
const pool = new mssql.ConnectionPool(config)

// Coba koneksi ke SQL Server
pool.connect(err => {
    if (err) {
        console.error('Koneksi ke SQL Server gagal:', err)
    } else {
        console.log('Koneksi ke SQL Server berhasil')

        // Lakukan kueri pada database
        const request = pool.request()
        request.query('SELECT * FROM kartu_akses', (err, result) => {
            if (err) {
                console.error('Kueri gagal:', err)
            } else {
                console.log('Hasil kueri:', result.recordset)
            }
            pool.close()
        })
    }
})

// Export pool untuk digunakan di modul lain
module.exports = pool
