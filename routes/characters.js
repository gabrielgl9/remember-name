const express = require('express');
const router = express.Router();

const characterController = require('../controllers/character-controller');

router.get('/:idFolder', characterController.getAllByFolder);
router.post('/create', characterController.create);
router.put('/update/:id', characterController.update);
router.delete('/delete/:id', characterController.delete);

module.exports = router