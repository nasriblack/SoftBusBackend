const express = require('express');
const { getSingleBus } = require('../controller/bus.controller');
const router = express.Router();

router.get('/:id', getSingleBus)

module.exports = router;