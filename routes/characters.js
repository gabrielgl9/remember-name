const express = require('express');
const router = express.Router();

const characterController = require('../controllers/product-controller');

router.get('/', characterController.getAll);

module.exports = router