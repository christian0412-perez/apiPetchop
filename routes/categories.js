const express = require('express');
const router = express.Router();
const categoryService = require('../controllers/categoryService') //Cambiar

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

router.get('/getAllCategories',categoryService.getAllCategories);

module.exports = router;