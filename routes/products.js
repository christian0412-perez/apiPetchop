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
router.get('/productValidate/:nameProduct', productsService.productValidate);
router.get('/getAllProducts', productsService.getAllProducts);
router.get('/getAllCategory/:idCategory', productsService.getAllCategory);
router.get('/getAllPet/:petType', productsService.getAllPet);
router.get('/getAllAboutDogs/:idCategory', productsService.getAllAboutDogs);
router.get('/getAllAboutCats/:idCategory', productsService.getAllAboutCats);
router.post('/deleteProduct/:idProducto', productsService.deleteProduct);
router.get('/productSearch/:nameProduct', productsService.productSearch);
module.exports = router;