const express = require('express');
const router = express.Router();

const categoriesService = require('../controllers/categoriesService')

router.post('/addCategory', categoriesService.addCategories);
router.delete('/deleteCategories/:idCategoria', categoriesService.deleteCategories);
router.get('/getCategories', categoriesService.getCategories)

module.exports = router;