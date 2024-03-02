const express = require('express');
const { getBusList } = require('../controller/busList.controller');
const router = express.Router();

router.get('/list', getBusList)

module.exports = router;