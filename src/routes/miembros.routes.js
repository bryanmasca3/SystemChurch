const { Router } = require('express');
const router = Router();
const{getMiembro,getMiembros,insertMiembro,insertcargo,insertasistenciasc,insertdones,insertactividades,insertusuario}=require('../controller/miembros.controller');

router.route('/')
	.get(getMiembros)
    .post(insertMiembro)
router.route('/:id')
    .get(getMiembro)      
router.route('/cargo')
    .post(insertcargo)
router.route('/asistenciasc')
    .post(insertasistenciasc)
router.route('/dones')
    .post(insertdones)
router.route('/actividades')
    .post(insertactividades)
router.route('/user')
    .post(insertusuario)
module.exports = router;
