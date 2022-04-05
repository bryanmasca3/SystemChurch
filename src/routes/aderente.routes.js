const { Router } = require('express');
const router = Router();
const{insertaderente,getAderentes}=require('../controller/aderente.controller');


router.route('/')
    .get(getAderentes)
    .post(insertaderente)

    
module.exports = router;