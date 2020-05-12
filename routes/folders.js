const express = require('express');
const router = express.Router();

const folderController = require('../controllers/folder-controller');

router.get('/', folderController.getAll);
router.post('/create', folderController.create);
router.put('/update/:id', folderController.update);
router.delete('/delete/:id', folderController.delete);

module.exports = router