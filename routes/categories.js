const express = require('express');
const router = express.Router();
const categoriesService = require('../controllers/categoriasService')

router.post('/addCategory', categoriesService.addCategory);
router.delete('/deleteCategory/:idProduct', categoriesService.deleteCategory);
router.get('/getCategories', categoriesService.getCategories)

module.exports = router;