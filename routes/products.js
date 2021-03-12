const express = require('express');
const router = express.Router();
const productsService = require('../controllers/productsService');
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

router.post('/insertProduct', productsService.insertProduct);
router.get('/getAllProducts', productsService.getAllProducts);
router.get('/getAllCategory/:categoria', productsService.getAllCategory);
router.get('/getAllPet/:tipoMascota', productsService.getAllPet);
router.get('/getAllSpecification', productsService.getAllSpecification);
module.exports = router;