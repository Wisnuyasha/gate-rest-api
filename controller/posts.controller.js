const pool = require("../database/index")
const postsController = {
    keluar: async (req, res) => {
        try {
            const id_kartu_akses = req.body.id_kartu_akses;
            console.log("(KELUAR) Melakukan Post  dengan ID : " + id_kartu_akses)
            const query = `SELECT is_aktif FROM kartu_akses WHERE id_kartu_akses = '${id_kartu_akses}'`;
            const request = pool.request()          
            request.query(query, (err, result) => {
                if (err) console.log(err);
                if (result.recordset.length === 0) {
                  // If id kartu akses is invalid
                  res.status(400).send('Invalid id kartu akses');
                  console.log('Invalid id kartu akses')
                } else if (result.recordset[0].is_aktif) {
                  // If id kartu akses is valid and active
                  res.status(200).send('Id kartu akses valid');
                  console.log('Id kartu akses valid')
                } else {
                  // If id kartu akses is valid but inactive
                  res.status(400).send('Id kartu akses tidak aktif');
                  console.log('Id kartu akses tidak aktif')
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },
    masuk: async (req, res) => {
        try {
            const id_kartu_akses = req.body.id_kartu_akses;
            console.log("(MASUK) Melakukan Post dengan ID : " + id_kartu_akses)
            const query = `SELECT is_aktif FROM kartu_akses WHERE id_kartu_akses = '${id_kartu_akses}'`;
            const request = pool.request()          
            request.query(query, (err, result) => {
                if (err) console.log(err);
                if (result.recordset.length === 0) {
                  // If id kartu akses is invalid
                  res.status(400).send('Invalid id kartu akses');
                  console.log('Invalid id kartu akses')
                } else if (result.recordset[0].is_aktif) {
                  // If id kartu akses is valid and active
                  res.status(200).send('Id kartu akses valid');
                  console.log('Id kartu akses valid')
                } else {
                  // If id kartu akses is valid but inactive
                  res.status(400).send('Id kartu akses tidak aktif');
                  console.log('Id kartu akses tidak aktif')
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },
    test: async (req, res) => {
        try {
            console.log("masuk bang")
            res.send({ message: 'masuk bang' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },

}

module.exports = postsController