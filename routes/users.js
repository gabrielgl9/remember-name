var express = require('express');
var router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/', userController.getAll);
router.post('/register', userController.create);
router.delete('/delete/:id', userController.delete);
router.put('/update/:id', userController.update);
router.post('/login', userController.login);

module.exports = router;