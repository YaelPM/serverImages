const express = require('express');
const router = express.Router();
const productsService = require('../controllers/productsService')

router.post('/addProduct', productsService.addProduct);
router.delete('/deleteProduct/:idProduct', productsService.deleteProduct);
router.get('/getProducts', productsService.getProduct);
router.put('/updateProduct', productsService.updateProduct)

module.exports = router;