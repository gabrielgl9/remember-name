var express = require('express');
var router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/users', userController.getAll);
router.post('/register', userController.create);
module.exports = router;