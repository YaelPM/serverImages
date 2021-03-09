var express = require('express');
var router = express.Router();
const rolesService = require('../controllers/rolesService')

router.post('/addRol', rolesService.addRol);
router.delete('/deleteRol/:idRol', rolesService.deleteRol);
router.get('/getRoles', rolesService.getRoles)

module.exports = router;