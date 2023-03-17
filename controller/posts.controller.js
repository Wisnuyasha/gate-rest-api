const pool = require("../database/index")
const postsController = {
    keluar: async (req, res) => {
        try {
            // const id_kartu_akses = req.body.idkartu;
            // const result = await new Promise((resolve, reject) => {
            //     pool.query('SELECT is_aktif FROM kartu_akses WHERE id_kartu_akses = ?', [id_kartu_akses], (error, results) => {
            //         if (error) return reject(error);
            //         resolve(results);
            //     });
            // });
            // if (result[0].is_aktif === 0) {
            //     res.send({ message: 'Kartu sedang tidak aktif' });
            // } else {
            //     await new Promise((resolve, reject) => {
            //         pool.query('UPDATE kartu_akses SET is_aktif = 0 WHERE id_kartu_akses = ?', [id_kartu_akses], (error, results) => {
            //             if (error) return reject(error);
            //             resolve(results);
            //         });
            //     });
            //     res.send({ message: 'Berhasil keluar gerbang' });
            // }
            pool.connect(err => {
                    if (err) {
                        console.error('Koneksi ke SQL Server gagal:', err)
                    } else {
                        console.log('Koneksi ke SQL Server berhasil')
                
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
                }) // test konek ke mssql
            console.log("keluar bang")
            res.send({ message: 'keluar bang' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },
    masuk: async (req, res) => {
        try {
            // const id_kartu_akses = req.body.idkartu;
            // const result = await new Promise((resolve, reject) => {
            //     pool.query('SELECT is_aktif FROM kartu_akses WHERE id_kartu_akses = ?', [id_kartu_akses], (error, results) => {
            //         if (error) return reject(error);
            //         resolve(results);
            //     });
            // });
            // if (result[0].is_aktif === 0) {
            //     await new Promise((resolve, reject) => {
            //         pool.query('UPDATE kartu_akses SET is_aktif = 1 WHERE id_kartu_akses = ?', [id_kartu_akses], (error, results) => {
            //             if (error) return reject(error);
            //             resolve(results);
            //         });
            //     });
            //     res.send({ message: 'Berhasil memasuki gerbang' });
            // } else {
            //     res.send({ message: 'Kartu sedang aktif' });
            // }
            console.log("masuk bang")
            res.send({ message: 'masuk bang' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },

}

module.exports = postsController