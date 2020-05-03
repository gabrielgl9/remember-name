const express = require('express');
const router = express.Router();

const characterController = require('../controllers/character-controller');

router.get('/', characterController.getAll);

module.exports = router