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
            console.log("keluar")
        } catch (error) {
            console.error("error masuk");
            // console.error(error);
            // res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
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
            console.log("masuk")
        } catch (error) {
            console.error("error masuk");
            // console.error(error);
            // res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },

}

module.exports = postsController