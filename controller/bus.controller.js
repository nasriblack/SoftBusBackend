const Bus = require("../model/Bus")
const { getBus, updateBusService, updateSeatBusService } = require("../services/bus.service")

exports.getSingleBus = async (req, res, next) => {
    try {
        const result = await getBus()
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

exports.updateBus = async (req, res, next) => {
    try {
        const bus = await updateBusService(req.params.id, req.body)
        res.send({ data: bus, message: "Product updated successfully!" });
    } catch (error) {
        next(error)
    }
}
exports.updateSeat = async (req, res, next) => {
    const { id, seatId } = req.params;
    const { userName } = req.body;
    try {
        const busResult = await updateSeatBusService(id, seatId, userName)
        res.send({ data: busResult, message: "Seat updated successfully!" });

    } catch (error) {
        next(error)
    }
}