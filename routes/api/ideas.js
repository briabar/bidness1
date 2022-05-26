const express = require('express');
const router = express.Router();
const ideasCtrl = require('../../controllers/ideas');
const multer = require('multer');
const upload = multer();

router.get('/', ideasCtrl.index)
router.post('/', upload.single(), ideasCtrl.create)
router.delete('/:id', ideasCtrl.deleteIdea)
// router.get('/ideas/:id', ideasCtrl.deleteIdea)

module.exports = router;