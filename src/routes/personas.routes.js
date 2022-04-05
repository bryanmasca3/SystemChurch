const { Router } = require('express');
const router = Router();
const{insertasistencia,insertaridiomas,insertgrado_instruccion,insert_profesion_ocu}=require('../controller/personas.controller');


router.route('/asistencia')
    .post(insertasistencia)
router.route('/idioma')
    .post(insertaridiomas)
router.route('/gradoinst')
    .post(insertgrado_instruccion)
router.route('/profesionocupa')
    .post(insert_profesion_ocu)
    
module.exports = router;