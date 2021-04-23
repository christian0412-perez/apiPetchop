const express = require('express');
const router = express.Router();
const sellsService = require('../controllers/sellsService');
const jwt = require('jsonwebtoken')
const configuration = require('../ConfigServer')

router.use('/', (req, res, next) => {
    //Paso 1.
    const token =req.headers['authorization']
    if (!token){
        next()
        req.user = null
        return
    }
    jwt.verify(token,configuration.jwt.secret,(err, user)=>{
        if (err)
            req.user = null
        else
            req.user = user
        next()
    })
})

router.get('/getAllVentas', sellsService.getAllVentas);
router.post('/truncTable', sellsService.truncTable );
router.post('/deleteSell/:idVenta', sellsService.deleteSell);

module.exports = router;