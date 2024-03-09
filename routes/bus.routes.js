const express = require('express');
const { getSingleBus, updateBus, updateSeat } = require('../controller/bus.controller');
const router = express.Router();

router.get('/:id', getSingleBus)

router.patch("/edit-bus/:id", updateBus);
// router.patch("/bus/seats/:id/:seatId", updateSeat);
router.patch("/seats/:id/:seatId", updateSeat);


module.exports = router;