const express = require('express');
const router = express.Router();
const ideasCtrl = require('../../controllers/ideas');
const multer = require('multer');

router.get('/', ideasCtrl.index)
router.post('/', ideasCtrl.create)

module.exports = router;