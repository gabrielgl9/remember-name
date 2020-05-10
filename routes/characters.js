const express = require('express');
const router = express.Router();

const characterController = require('../controllers/character-controller');

router.get('/', characterController.getAll);
router.post('/create', characterController.create);
router.put('/update/:id', characterController.update);
router.delete('/delete/:id', characterController.delete);

module.exports = router