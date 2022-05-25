const express = require('express');
const router = express.Router();
const ideasCtrl = require('../../controllers/ideas');
const multer = require('multer');

router.post('/businessgenerator', ideasCtrl.index)
router.post('/businessgenerator', ideasCtrl.create)

module.exports = router;