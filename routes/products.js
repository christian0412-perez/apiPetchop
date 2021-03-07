const express = require('express');
const router = express.Router();
const productsService = require('../controllers/productsService');
const jwt = require('jsonwebtoken');
const configuration = require('../ConfigServer');

router.post('/insertProduct', productsService.insertProduct);
router.get('/getAllProducts', productsService.getAllProducts);

module.exports = router;