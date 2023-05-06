const pool = require("../database/index")

function log(table, isvalid, idgate, idkartu){
  const query = `INSERT INTO ${table} (id_kartu_akses, id_register_gate, is_valid) VALUES ('${idkartu}', ${idgate}, ${isvalid})`;
  pool.request().query(query, (err, res) => {
    if(err) console.log(err)
    else console.log("berhasil login" + res)
  })
}

const postsController = {
    keluar: async (req, res) => {
      try {
        // Check if idkartu is active and idgate exists
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
            const id_register_gate = req.body.id_register_gate;
            console.log("(MASUK) Melakukan Post dengan ID : " + id_kartu_akses + "dan" + id_register_gate)
            const query = `SELECT *
            FROM kartu_akses
            INNER JOIN register_gate ON kartu_akses.id_kartu_akses = register_gate.id_register_gate
            WHERE kartu_akses.id_kartu_akses = '${id_kartu_akses}' AND register_gate.id_register_gate = '${id_register_gate}'
            `;
            const request = pool.request()          
            request.query(query, (err, result) => {
                if (err) console.log(err);
                if (result.recordset.length === 0) {
                  // If id kartu akses is invalid
                  res.send('0');
                } else if (result.recordset[0].is_aktif) {
                  // If id kartu akses is valid and active
                  res.send('1');
                  log('log_masuk', 1, id_register_gate, id_kartu_akses);
                } else {
                  // If id kartu akses is valid but inactive
                  res.send('0');
                  log('log_masuk', 0, id_register_gate, id_kartu_akses)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Terjadi kesalahan saat memproses permintaan' });
        }
    },

}

module.exports = postsController
