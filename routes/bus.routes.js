const express = require('express');
const { getSingleBus, updateBus, updateSeat } = require('../controller/bus.controller');
const router = express.Router();

router.get('/:id', getSingleBus)

router.patch("/edit-bus/:id", updateBus);
router.patch("/:id/seats/:seatId", updateSeat);


module.exports = router;