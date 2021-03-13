const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const categoriesService = require('../controllers/categoriasService')

router.post('/addCategory', categoriesService.addCategory);
router.delete('/deleteCategory/:idProduct', categoriesService.deleteCategory);
=======
const categoriesService = require('../controllers/categoriesService')

router.post('/addCategories', categoriesService.addCategories);
router.delete('/deleteCategories/:idCategoria', categoriesService.deleteCategories);
>>>>>>> origin/master
router.get('/getCategories', categoriesService.getCategories)

module.exports = router;