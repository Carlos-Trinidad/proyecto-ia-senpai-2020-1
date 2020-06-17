const express = require('express');
const router = express.Router();

const pingController = require('./../controllers/pingController');

router.get('/hola-mundo', async (req, res) => {2
    console.log(req.query);

    //let { usuario, foto } = req.query;

    let usuario = req.query.usuario;
    let foto = req.query.foto;

    res.status(200).send({data: 'hola mundo usuario ' + usuario + ' con ip ' + req.ip + '. Veo que estas buscando la foto: ' + foto});
});

// Rutas Ping
router.get('/ping', pingController.getPing);
router.post('/ping', pingController.postPing);

/*

router.get('usuarios/:id', async (req, res) => {
    console.log(req.params);

});

router
  .route('/usuarios')
  .get(async (req, res) => {

  })
  .post(); */


module.exports = router;